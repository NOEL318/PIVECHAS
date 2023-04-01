import "../main.scss";
import blurup from "../assets/group223.png";
import blurright from "../assets/group228.png";
import rosa from "../assets/rosa.png";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { TopNavbar } from "../components/TopNavbar";

export const SignUp = () => {
	const [email, setemail] = useState();
	const [password, setpassword] = useState();
	const [nombre, setnombre] = useState();

	const Su = async (nombre, email, password) => {
		const Load = await createUserWithEmailAndPassword(auth, email, password)
			.then(async (userCredential) => {
				const user = userCredential.user;
				updateProfile(auth.currentUser, {
					displayName: nombre,
					photoURL: `https://api.multiavatar.com/${nombre}.svg`,
				});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
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
