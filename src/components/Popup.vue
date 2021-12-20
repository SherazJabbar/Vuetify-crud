<template>
  <v-dialog max-width="600px" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <v-btn plain class="success" dark v-bind="attrs" v-on="on">
        Add new project
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="mdi-folder"
            :rules="inputRules"
          ></v-text-field>
          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="mdi-account-edit"
            :rules="inputRules"
          ></v-textarea>
          <v-menu>
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                label="Due Date"
                prepend-icon="mdi-calendar-range"
                v-bind="attrs"
                v-on="on"
                :value="due"
              >
              </v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>

          <v-btn
            plain
            class="success mx-0 mt-3"
            @click="submit"
            :loading="loading"
          >
            Add Project
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
// import { format } from "date-fns";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      inputRules: [(v) => v.length >= 3 || "Minimum length is 3 characters"],
      loading: false,
      dialop: false,
    };
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          due: this.due,
          person: "Sheraz Jabbar",
          status: "ongoing",
        };

        await addDoc(collection(db, "projects"), {
          ...project,
        }).then(() => {
          console.log("Added in db");
          this.loading = false;
          this.dialog = false;
          this.$emit("projectAdded");
        });
      }
    },
  },
  //   computed: {
  //     formattedDate() {
  //       return this.due ? format(this.due, "Do MMM YYYY") : "";
  //     },
  //   },
};
</script>

<style scoped></style>
