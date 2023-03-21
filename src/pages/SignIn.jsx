import "../main.scss";
import blurup from "../assets/group223.png";
import blurright from "../assets/group228.png";
import loto from "../assets/loto.webp";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
export const SignIn = () => {
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
							action="POST"
						>
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
								<div className="terms">
									<input
										type="checkbox"
										name="termsyconditions"
										id="termsyconditions"
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
									to={"/SignUp"}
								>
									No tienes una cuenta? Crea Una
								</Link>
							</div>
							<button className="button">Iniciar Sesión</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
export default SignIn;
