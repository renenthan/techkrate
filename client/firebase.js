// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD08kvmXN8dPPNvOTDLakxAIIffpVUB7YU",
  authDomain: "techkrate-6a1de.firebaseapp.com",
  projectId: "techkrate-6a1de",
  storageBucket: "techkrate-6a1de.firebasestorage.app",
  messagingSenderId: "300052298338",
  appId: "1:300052298338:web:687946db6cb18e6dbaef3b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
