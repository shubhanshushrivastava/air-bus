import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUi0BN_eopRzw_7t3K8t4RFIf7vurUlb0",
  authDomain: "airbus-clone-ccbcf.firebaseapp.com",
  projectId: "airbus-clone-ccbcf",
  storageBucket: "airbus-clone-ccbcf.appspot.com",
  messagingSenderId: "145778604011",
  appId: "1:145778604011:web:5507f105bbc97c0807cbae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth};