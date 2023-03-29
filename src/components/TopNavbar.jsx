import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";

import { useState } from "react";
export const TopNavbar = () => {
	const [isOpen, setisOpen] = useState(false);
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
								<Link to={"Tienda"}>Tienda</Link>
							</li>
							<li className="delay-4">
								<Link to={"/Contacto"}>Contacto</Link>
							</li>
							<li className="delay-5">
								<Link to={"/SignIn"}>Iniciar Sesión</Link>
							</li>
							<li className="delay-6">
								<Link to={"/Carrito"}>
									<AiOutlineShoppingCart />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};
