/* Este código importa funciones del SDK de Firebase para inicializar y configurar una aplicación de
Firebase, y para acceder a los servicios de autenticación de Firebase y Firestore. También configura
un objeto de configuración de Firebase con las credenciales y configuraciones necesarias para la
aplicación. Finalmente, exporta el Firestore inicializado y los servicios de autenticación para
usarlos en otras partes de la aplicación. */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDCAuBfMVgabHwDpI5XGPH6KPdTe8mY3E8",
	authDomain: "pivechas.firebaseapp.com",
	projectId: "pivechas",
	storageBucket: "pivechas.appspot.com",
	messagingSenderId: "862938167968",
	appId: "1:862938167968:web:90cf5a9a71889a2973a7c5",
	measurementId: "G-ZP20K89YY7",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
