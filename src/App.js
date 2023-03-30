import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Tienda from "./pages/Tienda";

function App() {
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
						element={<Tienda />}
					/>
					<Route
						index
						path="/SignIn"
						element={<SignIn />}
					/>
					<Route
						index
						path="/SignUp"
						element={<SignUp />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
