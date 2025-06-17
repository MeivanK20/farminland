// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARkaxOazpDx4wcJp1QdB5rf-Zp_JkTAN8",
  authDomain: "farminland-471ed.firebaseapp.com",
  projectId: "farminland-471ed",
  storageBucket: "farminland-471ed.firebasestorage.app",
  messagingSenderId: "827181575858",
  appId: "1:827181575858:web:65180613dea356a9e563ab"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);