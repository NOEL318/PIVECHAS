/* Este es un componente de React para una página de inicio de sesión. Importa varios activos, como
imágenes y hojas de estilo, así como las dependencias necesarias, como `useState` de React y
`signInWithEmailAndPassword` de la autenticación de Firebase. El componente presenta un formulario
para que los usuarios ingresen su correo electrónico y contraseña para iniciar sesión, con una
casilla de verificación para aceptar los términos y condiciones y un enlace a la página de registro.
Cuando el usuario hace clic en el botón "Iniciar sesión", se llama a la función `Si` para iniciar
sesión con el usuario utilizando la autenticación de Firebase. */

import "../main.scss";
import blurup from "../assets/group223.png";
import blurright from "../assets/group228.png";
import loto from "../assets/loto.webp";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { TopNavbar } from "../components/TopNavbar";

export const SignIn = () => {
	const [email, setemail] = useState();
	const [password, setpassword] = useState();

	const Si = async (email, password) => {
		await signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				// ...
				console.log(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};
	return (
		<>
			<TopNavbar />
			<div className="auth-container">
				<div className="blur-up">
					<img
						src={blurup}
						alt=""
					/>
				</div>
				<div className="blur-right">
					<img
						src={blurright}
						alt=""
					/>
				</div>
				<h1 className="page-title over">Iniciar Sesión</h1>
				<div className="form-container">
					<div className="imagen-formulario">
						<img
							src={loto}
							alt=""
						/>
					</div>
					<div className="formulario">
						<div className="form-title">
							<h1>Pivechas</h1>
							<img
								src={logo}
								alt=""
							/>
						</div>
						<form
							className="form"
							onSubmit={(e) => e.preventDefault()}
						>
							<label htmlFor="email">Email</label>
							<input
								className="text"
								type="email"
								id="email"
								onChange={(e) => setemail(e.target.value)}
							/>
							<label htmlFor="password">Contraseña</label>

							<input
								className="text"
								type="password"
								id="password"
								onChange={(e) => setpassword(e.target.value)}
							/>
							<div className="checkbox-group">
							
								<Link
									className="label"
									to={"/SignUp"}
								>
									No tienes una cuenta? Crea Una
								</Link>
							</div>
							<button
								type="button"
								className="button"
								onClick={() => Si(email, password)}
							>
								Iniciar Sesión
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
export default SignIn;
