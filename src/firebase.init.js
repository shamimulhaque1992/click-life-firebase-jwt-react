// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMCgoPoiggY7ReUckLWPPNHmG8Mim0CtU",
  authDomain: "personal-photographer-d3808.firebaseapp.com",
  projectId: "personal-photographer-d3808",
  storageBucket: "personal-photographer-d3808.appspot.com",
  messagingSenderId: "326852337327",
  appId: "1:326852337327:web:fd7c5d3c2ee0067310fe5a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
