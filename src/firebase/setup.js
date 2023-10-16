import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAFGMNN5D7dIPMrtdEvpCZqcBrYDFh4CE0",
  authDomain: "bbc-clone-9cbf4.firebaseapp.com",
  projectId: "bbc-clone-9cbf4",
  storageBucket: "bbc-clone-9cbf4.appspot.com",
  messagingSenderId: "207445538364",
  appId: "1:207445538364:web:ffe7f6d5e34d6243f4b539",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
