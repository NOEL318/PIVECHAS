/* Este es un componente de React llamado `LeftBar` que muestra un menú de navegación en la barra
lateral izquierda con varios enlaces e íconos. También incluye funcionalidad para un menú
desplegable, autenticación de usuario y un botón de cierre de sesión. El componente importa varios
íconos y módulos de bibliotecas externas como `react-icons` y `react-router-dom`. */

import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiFillShop } from "react-icons/ai";
import { MdOutlineDashboard, MdOutlineChatBubbleOutline } from "react-icons/md";
import { TbGraph } from "react-icons/tb";
import { RiUser3Line } from "react-icons/ri";
import { CiLogout, CiLogin } from "react-icons/ci";
import { useEffect, useState } from "react";
import { BiMenu, BiHomeAlt2 } from "react-icons/bi";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { RiAdminLine } from "react-icons/ri";
import { doc, getDoc } from "firebase/firestore";

export const LeftBar = ({ active }) => {
	const LogOut = async () => {
		signOut(auth);
	};
	const [isOpen, setisOpen] = useState(false);
	const [user, setuser] = useState();
	const [account, setaccount] = useState();
	useEffect(() => {
		onAuthStateChanged(auth, async (usr) => {
			if (usr) {
				setuser(usr);
				const docRef = doc(db, "users", usr.email);
				const docSnap = await getDoc(docRef);
				setaccount(docSnap.data());
			} else {
				setuser(null);
			}
		});
	}, [auth]);
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
					<li className={`delay-1`}>
						<Link to={"/"}>
							<BiHomeAlt2 className="icon" />
							Inicio
						</Link>
					</li>
					<li className={`delay-1 ${active == "Tienda" ? "active" : ""}`}>
						<Link to={"/Tienda"}>
							<MdOutlineDashboard className="icon" />
							Tienda Online
						</Link>
					</li>
					<li className={`delay-1 ${active == "Sucursales" ? "active" : ""}`}>
						<Link to={"/Sucursales"}>
							<AiFillShop className="icon" />
							Sucursales
						</Link>
					</li>
					<li className={`delay-2 ${active == "Nosotros" ? "active" : ""}`}>
						<Link to={"/Nosotros"}>
							<TbGraph className="icon" />
							Nosotros
						</Link>
					</li>
					<li className={`delay-3 ${active == "Contacto" ? "active" : ""}`}>
						<Link to={"/Contacto"}>
							<MdOutlineChatBubbleOutline className="icon" />
							Contacto
						</Link>
					</li>
					<li className={`delay-4 ${active == "Cuenta" ? "active" : ""}`}>
						<Link to={"/Cuenta"}>
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
					{account && account.role == "admin" && (
						<li className={`delay-6 ${active == "Admin" ? "active" : ""}`}>
							<Link to={"/Admin"}>
								<RiAdminLine className="icon" />
								Admin
							</Link>
						</li>
					)}
				</ul>
				<div className="log-out-button">
					<span className="background-button">
						<div className="color"></div>
					</span>
					{user ? (
						<div
							className="text"
							onClick={LogOut}
						>
							<CiLogout className="icon" />
							Cerrar Sesión
						</div>
					) : (
						<Link to={"/SignIn"}>
							<div className="text">
								<CiLogin className="icon" />
								Iniciar Sesión
							</div>
						</Link>
					)}
				</div>
			</div>
		</>
	);
};
export default LeftBar;
