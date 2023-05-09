/* Este es un componente de React llamado `ArmaTuRamo` que muestra una lista de productos de una base
de datos de Firestore y permite al usuario seleccionar varios productos para crear un ramo
personalizado. Importa varias dependencias y componentes, incluidos `LeftBar`, `Evaluador` y
`Loader`. También utiliza los ganchos `useState` y `useEffect` para administrar el estado y obtener
datos de la base de datos. El componente representa un contenedor con un fondo borroso, una barra
lateral izquierda y un contenedor derecho con una lista de productos. Cada producto se muestra como
un cuadrado con una imagen, nombre, calificación, opciones de color y precio. Cuando se hace clic en
un producto, se agrega a una lista de artículos seleccionados, que se muestra con un estilo
diferente. Si no hay productos para mostrar, se muestra una rueda giratoria de carga. */

import LeftBar from "../components/LeftBar";
import "../main.scss";
import blurup from "../assets/group223.png";
import blurright from "../assets/group228.png";
import Rater from "react-rater";
import { useEffect, useState } from "react";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../firebase";
import Loader from "react-loaders";

export const ArmaTuRamo = () => {
	const [productos, setproductos] = useState([]);
	const [selectedarticles, setselectedarticles] = useState([]);
	const getProductsList = async () => {
		const querySnapshot = await getDocs(query(collection(db, "inventario"), where("ramo_element", "==", true)));
		setproductos([]);
		querySnapshot.forEach((doc) => {
			setproductos((productos) => [...productos, doc.data()]);
		});
	};
	useEffect(() => {
		getProductsList();
	}, []);
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
					<LeftBar active={"Tienda"} />
					<div className="rightbar">
						<div className="right-container">
							<div className="products">
								<div className="background"></div>
								{productos.length >= 1 ? (
									productos.map((producto) => {
										return (
											<div
												className={`product-square ${
													selectedarticles.find((element) => element.id == producto.id) ? "active" : ""
												}`}
												key={producto.id}
												onClick={() => {
													var article = selectedarticles.find((element) => element.id == producto.id);
													if (article) {
														var newselected = selectedarticles.filter((product) => product.id != producto.id);
														setselectedarticles(newselected);
													} else {
														setselectedarticles([...selectedarticles, producto]);
													}
												}}
											>
												<div className="background"></div>
												<div className="prod-info">
													<img
														src={producto.image_url}
														alt=""
														className="product_image"
													/>
													<div className="product-text">
														<h2>{producto.nombre}</h2>
														<Rater
															total={5}
															rating={4}
															interactive={false}
														/>
														{producto.colors && (
															<div className="circles">
																{producto.colors.map((color) => (
																	<div
																		key={color[1] + color[2] + color[3] + color[4]}
																		className="color-circle"
																		style={{ background: color }}
																	></div>
																))}
															</div>
														)}
														<br />
														<h2>$ {producto.precio}mxn</h2>
													</div>
												</div>
											</div>
										);
									})
								) : (
									<div className="loader">
										<Loader type="pacman" />
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default ArmaTuRamo;
