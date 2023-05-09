/* Este es un componente de React llamado `TopNavbar` que representa una barra de navegación con
enlaces a diferentes páginas de un sitio web. También incluye íconos para un carrito de compras y un
menú, y muestra la imagen de perfil y el nombre del usuario si está conectado. El componente usa
ganchos de React como `useState` y `useEffect` para administrar el estado y realizar efectos
secundarios e importaciones. varios módulos como `Link` de `react-router-dom` e iconos de
`react-icons`. También importa `auth` y `onAuthStateChanged` desde un módulo de Firebase para
manejar la autenticación de usuarios. */

import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
export const TopNavbar = () => {
	const [isOpen, setisOpen] = useState(false);
	const [user_picture, setuser_picture] = useState();
	const [username, setusername] = useState();
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setuser_picture(user.photoURL);
				setusername(user.displayName);
			} else {
				console.log("Not users here");
			}
		});
	}, [auth]);
	return (
		<>
			<div className="top-navbar">
				<div className={`${isOpen}`}>
					<div className="navbar">
						<div className="mini-display">
							<img
								className="logo-navbar"
								src={logo}
								alt=""
							/>
							<button
								className="burguer-button"
								onClick={() => setisOpen(isOpen ? false : true)}
							>
								<BiMenu />
							</button>
						</div>
						<ul>
							<li className="delay-1">
								<Link to={"/"}>Inicio</Link>
							</li>
							<li className="delay-2">
								<Link to={"/Nosotros"}>Nosotros</Link>
							</li>
							<li className="delay-3">
								<Link to={"/Tienda"}>Tienda</Link>
							</li>

							<li className="delay-4">
								<Link to={"/Contacto"}>Contacto</Link>
							</li>
							{!username && (
								<li className="delay-5">
									<Link to={"/SignIn"}>Iniciar Sesión</Link>
								</li>
							)}
							<li className="delay-6">
								<Link to={"/Carrito"}>
									<AiOutlineShoppingCart />
								</Link>
							</li>
							{user_picture && (
								<li className="delay-7 profilepic">
									<Link
										to={"/Cuenta"}
										className="account"
									>
										<img
											src={user_picture}
											alt=""
										/>
										<p>{username}</p>
									</Link>
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
