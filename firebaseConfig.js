// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO2Z2_SPtbOrAjrgXdnHVe_6YucR1hvDI",
  authDomain: "sce-final-project-sk.firebaseapp.com",
  databaseURL: "https://sce-final-project-sk-default-rtdb.firebaseio.com",
  projectId: "sce-final-project-sk",
  storageBucket: "sce-final-project-sk.appspot.com",
  messagingSenderId: "428683332915",
  appId: "1:428683332915:web:b2dae46ca46e5baf8e8246",
  measurementId: "G-9C39TQ74CK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);