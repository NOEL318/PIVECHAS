import logo from "../assets/logo.svg";
import loto from "../assets/loto.webp";
import girasol from "../assets/girasol.png";
import rosa from "../assets/rosa.png";
import grid1 from "../assets/image1grid.png";
import grid2 from "../assets/image2grid.png";
import grid3 from "../assets/image3grid.png";
import cuidado from "../assets/cuidado.png";
import { BsFillBoxSeamFill, BsFillCreditCard2FrontFill, BsFillStarFill, BsFillSunFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { GiWaterDrop } from "react-icons/gi";
import { FaTemperatureHigh } from "react-icons/fa";
import { RiPlantLine } from "react-icons/ri";
export const Home = () => {
	return (
		<>
			<div className="main">
				<div className="landing-layer">
					<h1 className="landing-title">PIVECHAS</h1>
					<img
						className="logo"
						src={logo}
						alt=""
					/>
				</div>
			</div>
			<div className="home-body">
				<div className="minicards">
					<div className="mini-card">
						<BsFillBoxSeamFill className="icon" />
						<div className="text">
							<h3>Envío Gratis</h3>
							<p className="description">No cobramos envío</p>
						</div>
					</div>
					<div className="mini-card">
						<BsFillCreditCard2FrontFill className="icon" />
						<div className="text">
							<h3>Pago Rapido</h3>
							<p className="description">Pago 100% seguro</p>
						</div>
						<br />
						<br />
						<br />
					</div>
					<div className="mini-card">
						<BiSupport className="icon" />
						<div className="text">
							<h3>Ayuda 24/7</h3>
							<p className="description">Soporte las 24 horas del día los 7 días de la semana</p>
						</div>
						<br />
						<br />
						<br />
					</div>
				</div>
				<div className="index-product-cards">
					<div className="texto-productos">
						<h1>Tenemos los mejores productos a los mejores precios</h1>
					</div>
					<div className="card">
						<div className="back">
							<img
								src={loto}
								alt=""
								className="image"
							/>
						</div>
						<div className="text">
							<h2>Flor de Loto</h2>
							<div className="stars">
								<BsFillStarFill className="star" />
								<BsFillStarFill className="star" />
								<BsFillStarFill className="star" />
								<BsFillStarFill className="star" />
								<BsFillStarFill className="star" />
							</div>
							<br />
							<br />
							<h3>$65.00</h3>
						</div>
					</div>
					<div className="card">
						<div className="back">
							<img
								className="image"
								src={rosa}
								alt=""
							/>
						</div>
						<div className="text">
							<h2>Rosa</h2>
							<div className="stars">
								<BsFillStarFill className="star" />
								<BsFillStarFill className="star" />
								<BsFillStarFill className="star" />
								<BsFillStarFill className="star" />
								<BsFillStarFill className="star" />
							</div>
							<br />
							<br />
							<h3>$65.00</h3>
						</div>
					</div>
					<div className="card">
						<div className="back">
							<img
								className="image"
								src={girasol}
								alt=""
							/>
						</div>
						<div className="text">
							<h2>Girasol</h2>
							<div className="stars">
								<BsFillStarFill className="star" />
								<BsFillStarFill className="star" />
								<BsFillStarFill className="star" />
								<BsFillStarFill className="star" />
								<BsFillStarFill className="star" />
							</div>
							<br />
							<br />
							<h3>$65.00</h3>
						</div>
					</div>
				</div>
				<h1 className="section-title">Para decorar tu casa</h1>
				<div className="image-grid">
					<div className="left">
						<div className="image-1">
							<img
								src={grid1}
								alt=""
							/>
						</div>
						<div className="image-3">
							<img
								src={grid3}
								alt=""
							/>
						</div>
					</div>
					<div className="right">
						<div className="image-2">
							<img
								src={grid2}
								alt=""
							/>
						</div>
					</div>
				</div>
				<div className="plants-care">
					<div className="left">
						<h1 className="title">Cuidado de Plantas</h1>
						<p className="description">Aprende el correcto cuidado de las plantas que amas</p>
						<br />
						<br />
						<ul>
							<li>
								<BsFillSunFill /> Iluminacion perfecta
							</li>
							<li>
								<GiWaterDrop /> No agregues demasiada agua
							</li>
							<li>
								<FaTemperatureHigh /> Fertiliza con frecuencia
							</li>
							<li>
								<RiPlantLine /> Usa una maceta por especie
							</li>
						</ul>
					</div>
					<div className="right">
						<img
							src={cuidado}
							alt=""
						/>
					</div>
				</div>
			</div>
		</>
	);
};
