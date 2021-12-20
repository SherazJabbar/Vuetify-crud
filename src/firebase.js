import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCySXlyrBpuAQTtxLUnBUrLN3ceYbepdhQ",
  authDomain: "vuetify-bc3dc.firebaseapp.com",
  projectId: "vuetify-bc3dc",
  storageBucket: "vuetify-bc3dc.appspot.com",
  messagingSenderId: "331606506368",
  appId: "1:331606506368:web:f71274397220dea3ba9f65",
  measurementId: "G-G536PC9GF1",
};

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// eslint-disable-next-line no-unused-vars

export default db;
