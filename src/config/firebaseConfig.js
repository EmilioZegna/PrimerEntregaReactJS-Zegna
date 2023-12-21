import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlx_xMe0QQ0jrZnFDLXTzkxpfhDe-fdOI",
  authDomain: "emilioshop-9ef8f.firebaseapp.com",
  projectId: "emilioshop-9ef8f",
  storageBucket: "emilioshop-9ef8f.appspot.com",
  messagingSenderId: "572205061597",
  appId: "1:572205061597:web:521fa16b74834673379234"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);