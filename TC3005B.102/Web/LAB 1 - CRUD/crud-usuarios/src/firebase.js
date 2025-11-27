import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYe_LTolq1xZyHvRpbCs6AeaDxSKE0Pis",
  authDomain: "crud-usuarios-94a42.firebaseapp.com",
  projectId: "crud-usuarios-94a42",
  storageBucket: "crud-usuarios-94a42.firebasestorage.app",
  messagingSenderId: "508025300206",
  appId: "1:508025300206:web:567592b5e72cee2108bfff"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
