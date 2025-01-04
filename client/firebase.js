// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Import addDoc and other Firestore functions

const firebaseConfig = {
  apiKey: "AIzaSyCx4i3qNgH4Gc8OIg37qAJeob9bZg2FFMY",
  authDomain: "techkrate-f7efc.firebaseapp.com",
  projectId: "techkrate-f7efc",
  storageBucket: "techkrate-f7efc.firebasestorage.app",
  messagingSenderId: "560803017951",
  appId: "1:560803017951:web:4e57daf6dc4779ea10a56a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firestore functions and db instance
export { db, collection, addDoc };
