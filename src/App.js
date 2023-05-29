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
import { auth, db } from "./firebase";
import { useEffect, useState } from "react";
import Cuenta from "./pages/Cuenta";
import { ProductPage } from "./components/Product";
import { Carrito } from "./pages/Carrito";
import { ToastContainer } from "react-toastify";
import ArmaTuRamo from "./pages/ArmaTuRamo";
import Sucursales from "./pages/Sucursales";
import { FinalizarPedido } from "./pages/FinalizarPedido";
import { Footer } from "./components/TopNavbar";
import {Admin} from "./pages/Admin";
import { doc, getDoc } from "firebase/firestore";

function App() {
	const [user, setuser] = useState();
	const [account, setaccount] = useState();
	useEffect(() => {
		console.log(account, "sas");
		onAuthStateChanged(auth, async (usr) => {
			if (usr) {
				const docRef = doc(db, "users", usr.email);
				const docSnap = await getDoc(docRef);
				setaccount(docSnap.data());
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
						path="/Sucursales"
						element={<Sucursales />}
					/>
					<Route
						path="/Tienda/:sucursal"
						element={user ? <Tienda /> : <SignIn />}
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
						path="/Tienda/:sucursal/product-page/:id"
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
					<Route
						path="/Finalizar_Pedido"
						element={user ? <FinalizarPedido /> : <SignUp />}
					/>

					<Route
						path="/Admin"
						element={account && account.role == "admin" ? <Admin /> : <SignIn />}
					/>
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
