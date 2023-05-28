import LeftBar from "../components/LeftBar";
import blurup from "../assets/group223.png";
import blurright from "../assets/group228.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Loader from "react-loaders";

export const Sucursales = () => {
	const [sucursales, setsucursales] = useState([]);
	const getData = async () => {
		setsucursales([]);
		const querySnapshot = await getDocs(collection(db, "sucursales"));
		querySnapshot.forEach((doc) => {
			setsucursales((sucursales) => [...sucursales, doc.data()]);
		});
	};
	useEffect(() => {
		getData();
	}, []);
	return (
		<>
			<div className="app-container">
				<div className="bars">
					<LeftBar active={"Sucursales"} />
					<div className="rightbar column">
						<div className="right-container">
							<div className="sucursales">
								{sucursales.map((sucursal) => {
									return (
										<div
											className="sucursal-square"
											key={sucursal.id}
										>
											<div className="background"></div>
											<div className="sucursal-info">
												<br />
												<br />
												<img
													src={sucursal.image_url}
													className="sucursal_image"
												/>

												<div className="sucursal-text">
													<h2>{sucursal.nombre}</h2>
												</div>
												<br />

												<Link to={`/Tienda/${sucursal.id}`}>
													<div className="cart-button">
														<button className="button button-wicon">
															<AiOutlineShoppingCart className="icon" />
														</button>
													</div>
												</Link>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Sucursales;
