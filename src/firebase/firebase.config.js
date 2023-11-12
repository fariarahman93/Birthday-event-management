// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVnPBocCJLV-t_yn21EHCoUd-scLgCuJc",
  authDomain: "birthday-event-by-faria.firebaseapp.com",
  projectId: "birthday-event-by-faria",
  storageBucket: "birthday-event-by-faria.appspot.com",
  messagingSenderId: "1042016097183",
  appId: "1:1042016097183:web:2e7512f8ddeb8e354f63aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;