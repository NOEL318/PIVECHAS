import "../main.scss";
import blurup from "../assets/group223.png";
import blurright from "../assets/group228.png";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineDashboard, MdOutlineChatBubbleOutline } from "react-icons/md";
import { TbGraph } from "react-icons/tb";
import { RiUser3Line } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";

export const Nosotros = () => {
	return (
		<>
			<div className="app-container">
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

				<div className="leftbar">
					<Link to={"/"} className="index-link">
						<div className="business-name">
							<img
								className="logo"
								src={logo}
								alt=""
							/>
							<p>PIVECHAS</p>
						</div>
					</Link>
					<ul>
						<li className="delay-1 active">
							<Link to={"/Tienda"}>
								<MdOutlineDashboard className="icon" />
								Tienda
							</Link>
						</li>
						<li className="delay-2">
							<Link to={"/Nosotros"}>
								{" "}
								<TbGraph className="icon" />
								Nosotros
							</Link>
						</li>
						<li className="delay-3">
							<Link to={"/Contacto"}>
								{" "}
								<MdOutlineChatBubbleOutline className="icon" />
								Contacto
							</Link>
						</li>
						<li className="delay-4">
							<Link to={"/Cuenta"}>
								{" "}
								<RiUser3Line className="icon" />
								Cuenta
							</Link>
						</li>
						<li className="delay-5">
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
			</div>
		</>
	);
};
export default Nosotros;
