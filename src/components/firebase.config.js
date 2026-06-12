// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRJwQTMcGXNcVUmV9ShEQiuXVHi3YrNho",
  authDomain: "practice-project-020626.firebaseapp.com",
  projectId: "practice-project-020626",
  storageBucket: "practice-project-020626.firebasestorage.app",
  messagingSenderId: "987813124498",
  appId: "1:987813124498:web:748bf3f1343ef27d8c494b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;