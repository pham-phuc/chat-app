import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAsxzQI1sM_949IRgTNUF7HKdfDeGvowiE",
  authDomain: "chat-app-49e1f.firebaseapp.com",
  projectId: "chat-app-49e1f",
  storageBucket: "chat-app-49e1f.appspot.com",
  messagingSenderId: "606228152852",
  appId: "1:606228152852:web:cb713a6df62f98970d1d01"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();