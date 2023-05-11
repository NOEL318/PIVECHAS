/* Este es un componente de React llamado `SignUp` que muestra un formulario para que los usuarios
creen una nueva cuenta. Importa varios activos, como imágenes y hojas de estilo, así como las
funciones necesarias de Firebase para la autenticación de usuarios. El componente utiliza ganchos de
estado para administrar la entrada del usuario para correo electrónico, contraseña y nombre. Cuando
el usuario hace clic en el botón "Crear Cuenta", se llama a la función `Su` para crear una nueva
cuenta de usuario con Firebase y actualizar el perfil del usuario con su nombre y una imagen de
avatar generada. El componente también incluye un enlace a la página de inicio de sesión y un
componente de barra de navegación. */

import "../main.scss";
import blurup from "../assets/group223.png";
import blurright from "../assets/group228.png";
import rosa from "../assets/rosa.png";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { TopNavbar } from "../components/TopNavbar";
import { toast } from "react-toastify";

export const SignUp = () => {
	const [email, setemail] = useState();
	const [password, setpassword] = useState();
	const [nombre, setnombre] = useState();
	const [terms, setterms] = useState(true);
	const Su = async (nombre, email, password) => {
		await createUserWithEmailAndPassword(auth, email, password)
			.then(async (userCredential) => {
				const user = userCredential.user;
				updateProfile(auth.currentUser, {
					displayName: nombre,
					photoURL: `https://api.multiavatar.com/${nombre}.svg`,
				});
				sendEmailVerification(auth.currentUser).then(() => {});
			})
			.catch((error) => {
				const errorMessage = error.message;
				toast(errorMessage, { position: "bottom-center", type: "error" });
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
				<h1 className="page-title over">Crear Cuenta </h1>
				<div className="form-container">
					<div className="imagen-formulario">
						<img
							src={rosa}
							className="rosa"
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
							<label htmlFor="name">Nombre:</label>
							<input
								className="text"
								type="text"
								onChange={(e) => setnombre(e.target.value)}
								id="name"
							/>

							<label htmlFor="email">Email</label>
							<input
								className="text"
								onChange={(e) => setemail(e.target.value)}
								type="email"
								id="email"
							/>
							<label htmlFor="password">Contraseña</label>
							<input
								className="text"
								onChange={(e) => setpassword(e.target.value)}
								type="password"
								id="password"
							/>
							<div className="checkbox-group">
								<div className="terms">
									<input
										type="checkbox"
										name="termsyconditions"
										id="termsyconditions"
										onChange={() => setterms(terms ? false : true)}
									/>
									<label
										htmlFor="termsyconditions"
										className="terms"
									>
										Acepto los Términos y Condiciones
									</label>
								</div>
								<Link
									className="label"
									to={"/SignIn"}
								>
									Ya tienes una cuenta? Inicia Sesión
								</Link>
							</div>
							<button
								className="button"
								type="button"
								disabled={terms}
								onClick={() => Su(nombre, email, password)}
							>
								Crear Cuenta
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
export default SignUp;
