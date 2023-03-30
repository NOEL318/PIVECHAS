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
									<img
										src={qr}
										alt=""
									/>
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
