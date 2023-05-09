/**
 * Esta es una función de React que configura el enrutamiento para una aplicación web y maneja la
 * autenticación del usuario usando Firebase.
 * @returns Se devuelve el componente `App`, que contiene la lógica de enrutamiento para las diferentes
 * páginas de la aplicación.
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Tienda from "./pages/Tienda";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useEffect, useState } from "react";
import Cuenta from "./pages/Cuenta";
import { ProductPage } from "./components/Product";
import { Carrito } from "./pages/Carrito";
import { ToastContainer } from "react-toastify";
import ArmaTuRamo from "./pages/ArmaTuRamo";

function App() {
	const [user, setuser] = useState();
	useEffect(() => {
		onAuthStateChanged(auth, (usr) => {
			if (usr) {
				const uid = usr.uid;
				setuser(usr);
			} else {
				setuser(null);
			}
		});
	}, [auth]);
	return (
		<>
			<BrowserRouter>
				<ToastContainer />

				<Routes>
					<Route
						index
						path="/"
						element={<Home />}
					/>
					<Route
						path="/Nosotros"
						element={<Nosotros />}
					/>
					<Route
						path="/Contacto"
						element={<Contacto />}
					/>
					<Route
						path="/Tienda"
						element={user ? <Tienda /> : <SignIn />}
					/>
					<Route
						path="/Tienda/ArmaTuRamoBuchon"
						element={user ? <ArmaTuRamo /> : <SignIn />}
					/>
					<Route
						path="/Tienda/product-page/:id"
						element={user ? <ProductPage /> : <SignUp />}
					/>
					<Route
						path="/Cuenta"
						element={user ? <Cuenta /> : <SignIn />}
					/>
					<Route
						path="/Carrito"
						element={user ? <Carrito /> : <SignIn />}
					/>
					<Route
						path="/SignIn"
						element={user ? <Home /> : <SignIn />}
					/>
					<Route
						path="/SignUp"
						element={user ? <Home /> : <SignUp />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
