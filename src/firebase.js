import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDHdaq4LNI3HogOqSQFef9YdT81oV6Mykg",
  authDomain: "bdprojetovite.firebaseapp.com",
  projectId: "bdprojetovite",
  storageBucket: "bdprojetovite.firebasestorage.app",
  messagingSenderId: "341456384039",
  appId: "1:341456384039:web:986bd98d8c16d763c01e02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth }