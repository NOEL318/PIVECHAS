import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route
						index
						path="/"
						element={<Home />}
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
