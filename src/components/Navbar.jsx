import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
export const Navbar = () => {
	return (
		<>
			<div className="navbar">
				<ul>
					<img
						className="logo-navbar"
						src={logo}
						alt=""
					/>

					<li>
						<Link to={"/"}>Inicio</Link>
					</li>
					<li>
						<Link to={"/Nosotros"}>Nosotros</Link>
					</li>
					<li>
						<Link to={"Tienda"}>Tienda</Link>
					</li>
					<li>
						<Link to={"/Contacto"}>Contacto</Link>
					</li>
					<li>
						<Link to={"/SignIn"}>Iniciar Sesión</Link>
					</li>
					<li>
						<Link to={"/Carrito"}>
							<AiOutlineShoppingCart />
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};
