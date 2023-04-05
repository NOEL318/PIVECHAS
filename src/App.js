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

function App() {
	const [user, setuser] = useState();
	useEffect(() => {
		onAuthStateChanged(auth, (usr) => {
			if (usr) {
				const uid = usr.uid;
				setuser(usr);
				console.log(uid);
			} else {
				setuser(null);
			}
		});
	}, [auth]);
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						index
						path="/"
						element={<Home />}
					/>
					<Route
						index
						path="/Nosotros"
						element={<Nosotros />}
					/>
					<Route
						index
						path="/Contacto"
						element={<Contacto />}
					/>
					<Route
						index
						path="/Tienda"
						element={user ? <Tienda /> : <SignIn />}
					/>
					<Route
						index
						path="/SignIn"
						element={user ? <Home /> : <SignIn />}
					/>
					<Route
						index
						path="/SignUp"
						element={user ? <Home /> : <SignUp />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
