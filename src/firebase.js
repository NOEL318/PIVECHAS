// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDCAuBfMVgabHwDpI5XGPH6KPdTe8mY3E8",
	authDomain: "pivechas.firebaseapp.com",
	projectId: "pivechas",
	storageBucket: "pivechas.appspot.com",
	messagingSenderId: "862938167968",
	appId: "1:862938167968:web:90cf5a9a71889a2973a7c5",
	measurementId: "G-ZP20K89YY7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
