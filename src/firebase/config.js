import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDYiRE6uMwLld7Ru345ud15i_rwS-0RcyI",
  authDomain: "bgip-2205.firebaseapp.com",
  projectId: "bgip-2205",
  storageBucket: "bgip-2205.appspot.com",
  messagingSenderId: "454389996442",
  appId: "1:454389996442:web:d376188b864e986edab823",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);


