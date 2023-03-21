import "../main.scss";
import blurup from "../assets/group223.png";
import blurright from "../assets/group228.png";
import rosa from "../assets/rosa.png";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
export const SignUp = () => {
	return (
		<>
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
				<h1 className="page-title over">Crear Cuenta</h1>
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
							action="POST"
						>
							<label htmlFor="name">Nombre</label>
							<input
								className="text"
								type="text"
								id="name"
							/>
							<label htmlFor="email">Email</label>
							<input
								className="text"
								type="email"
								id="email"
							/>
							<label htmlFor="password">Contraseña</label>

							<input
								className="text"
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
							<button className="button">Crear Cuenta</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
export default SignUp;
