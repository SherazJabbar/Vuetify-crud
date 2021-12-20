<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header>{{
            project.title
          }}</v-expansion-panel-header>
          <v-expansion-panel-content class="grey--text">
            <div class="font-weight-bold">{{ project.due }}</div>
            <div>{{ project.content }}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import db from "../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";

export default {
  data() {
    return {
      projects: [],
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter((project) => {
        return project.person == "Sheraz Jabbar";
      });
    },
  },

  created() {
    const q = query(
      collection(db, "projects"),
      where("person", "===", "Sheraz Jabbar")
    );

    // const q = collection(db, "projects");
    // eslint-disable-next-line no-unused-vars
    const data = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.projects.push(doc.data());
      });
    });
    console.log(this.projects);
  },
};
</script>

<style scoped></style>
