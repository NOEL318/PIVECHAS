import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineDashboard, MdOutlineChatBubbleOutline } from "react-icons/md";
import { TbGraph } from "react-icons/tb";
import { RiUser3Line } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";

export const LeftBar = ({ active }) => {
	const [isOpen, setisOpen] = useState(false);
	return (
		<>
			<div className={`leftbar ${isOpen}`}>
				<div className="business-name">
					<Link
						to={"/"}
						className="index-link"
					>
						<img
							className="logo"
							src={logo}
							alt=""
						/>
						<p>PIVECHAS</p>
					</Link>
					<button
						className="dropbutton"
						onClick={() => setisOpen(isOpen ? false : true)}
					>
						<BiMenu />
					</button>
				</div>
				<ul>
					<li className={`delay-1 ${active == "Tienda" ? "active" : ""}`}>
						<Link to={"/Tienda"}>
							<MdOutlineDashboard className="icon" />
							Tienda
						</Link>
					</li>
					<li className={`delay-2 ${active == "Nosotros" ? "active" : ""}`}>
						<Link to={"/Nosotros"}>
							{" "}
							<TbGraph className="icon" />
							Nosotros
						</Link>
					</li>
					<li className={`delay-3 ${active == "Contacto" ? "active" : ""}`}>
						<Link to={"/Contacto"}>
							{" "}
							<MdOutlineChatBubbleOutline className="icon" />
							Contacto
						</Link>
					</li>
					<li className={`delay-4 ${active == "Cuenta" ? "active" : ""}`}>
						<Link to={"/Cuenta"}>
							{" "}
							<RiUser3Line className="icon" />
							Cuenta
						</Link>
					</li>
					<li className={`delay-5 ${active == "Carrito" ? "active" : ""}`}>
						<Link to={"/Carrito"}>
							<AiOutlineShoppingCart className="icon" />
							Carrito
						</Link>
					</li>
				</ul>
				<div className="log-out-button">
					<span className="background-button">
						<div className="color"></div>
					</span>
					<div className="text">
						<CiLogout className="icon" />
						Cerrar Sesión
					</div>
				</div>
			</div>
		</>
	);
};
export default LeftBar;
