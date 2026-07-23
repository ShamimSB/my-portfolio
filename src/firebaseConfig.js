import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCt59BvtiECF_6w3H3QhtvgL8BDV-4ZAjc",
  authDomain: "my-portfolio-21664.firebaseapp.com",
  projectId: "my-portfolio-21664",
  storageBucket: "my-portfolio-21664.firebasestorage.app",
  messagingSenderId: "291153841608",
  appId: "1:291153841608:web:28132fc84355b375c744fd",
  measurementId: "G-0LXW9P2N1F"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);