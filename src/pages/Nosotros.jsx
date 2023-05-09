/* Este es un componente de React llamado "Nosotros" que renderiza una sección de un sitio web sobre la
empresa "PIVECHAS". Importa varios archivos de imagen y un componente LeftBar, y los utiliza para
mostrar información sobre la misión y visión de la empresa. El componente también usa clases CSS
para diseñar el diseño y la apariencia del contenido. */

import "../main.scss";
import blurup from "../assets/group223.png";
import blurright from "../assets/group228.png";
import LeftBar from "../components/LeftBar";
import mision from "../assets/mision.png";
import vision from "../assets/vision.webp";

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
									<img
										src={mision}
										alt=""
										className="mision"
									/>
									<br />
									<br />
									<br />
									<h2>Visión</h2>
									<p>
										Ser la florería líder en la región, reconocida por la calidad y la belleza de nuestros arreglos florales, la
										atención personalizada a nuestros clientes y la innovación constante en nuestros productos y servicios,
										creando un impacto positivo en la comunidad y el medio ambiente.
									</p>
									<img
										src={vision}
										alt=""
										className="vision"
									/>
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
