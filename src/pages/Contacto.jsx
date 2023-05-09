/* Este es un componente JavaScript React que representa una página de contacto. Importa varios
archivos de imagen y un componente LeftBar de otros archivos. El componente devuelve un código JSX
que incluye un contenedor con dos imágenes borrosas, un componente LeftBar y una sección con
información de contacto y un código QR. El componente se exporta como una exportación
predeterminada. */

import "../main.scss";
import blurup from "../assets/group223.png";
import blurright from "../assets/group228.png";
import qr from "../assets/qr.svg";

import LeftBar from "../components/LeftBar";

export const Contacto = () => {
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
					<LeftBar active={"Contacto"} />
					<div className="rightbar">
						<div className="right-container">
							<div className="contactanos">
								<div className="background"></div>
								<div className="info">
									<h1>Contacto</h1>
									<br />
									<br />
									<div className="qr">
										<img
											src={qr}
											alt=""
										/>
									</div>
									<h2>Escribenos por Whatsapp!</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Contacto;
