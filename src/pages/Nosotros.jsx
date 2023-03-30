import "../main.scss";
import blurup from "../assets/group223.png";
import blurright from "../assets/group228.png";
import LeftBar from "../components/LeftBar";

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

				<div className="bars">
					<LeftBar active={"Nosotros"} />
					<div className="rightbar">
						<div className="right-container">
							<div className="nosotros">
								<div className="background"></div>
								<div className="info">
									<h1>PIVECHAS</h1>
									<br />
									<br />
									<h2>Misión</h2>
									<p>
										Ofrecer productos florales de alta calidad y un servicio excepcional para crear experiencias memorables para
										nuestros clientes en sus celebraciones y ocasiones especiales.
									</p>
									<br />
									<br />
									<br />
									<h2>Visión</h2>
									<p>
										Ser la florería líder en la región, reconocida por la calidad y la belleza de nuestros arreglos florales, la
										atención personalizada a nuestros clientes y la innovación constante en nuestros productos y servicios,
										creando un impacto positivo en la comunidad y el medio ambiente.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Nosotros;
