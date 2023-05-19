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
import { toast } from "react-toastify";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const ArmaTuRamo = () => {
	const [productos, setproductos] = useState([]);
	const [selectedarticles, setselectedarticles] = useState([]);
	const [mainrate, setmainrate] = useState(0);
	var rate = 0;
	const getProductsList = async () => {
		const querySnapshot = await getDocs(query(collection(db, "inventario"), where("ramo_element", "==", true)));
		setproductos([]);
		querySnapshot.forEach((doc) => {
			setproductos((productos) => [...productos, doc.data()]);
		});
	};
	useEffect(() => {
		if (productos.length <= 0) {
			getProductsList();
		}
		if (selectedarticles.length >= 1) {
			for (let i = 0; i < selectedarticles.length; i++) {
				var element = selectedarticles[i];
				rate += element.rate;

				setmainrate(rate / selectedarticles.length);
			}
		} else {
			setmainrate(0);
		}
	}, [selectedarticles]);
	return (
		<>
			<div className="app-container">
				<div className="bars">
					<LeftBar active={"Tienda"} />
					<div className="rightbar column">
						<h1>Selecciona las flores para tu ramo</h1>
						<Rater
							total={5}
							rating={mainrate}
							interactive={false}
						/>
						<br />
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
															rating={producto.rate}
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

														<h2>$ {producto.precio}mxn</h2>
													</div>
													<div className="buttons">
														<input
															type="number"
															className="qty"
														/>
														<button className="button">Agregar a Ramo</button>
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
						<button
							className="button"
							onClick={() => {
								var previousCart = localStorage.getItem("cart");
								var lastcar = JSON.parse(previousCart);

								var x = 0;
								for (let i = 0; i < selectedarticles.length; i++) {
									var element = selectedarticles[i];
									x += element.precio;
								}
								var newramo = {
									nombre: "Ramo Personalizado",
									rate: mainrate,
									id: parseInt((Math.random() * (1000 - 50) + 50).toFixed(0)),
									descripcion: "",
									precio: parseFloat((x * 0.8).toFixed(2)),
									quantity: 1,
									ramo: true,
									ramo_element: false,
									ramo_componentes: selectedarticles.map((element) => element.nombre),
									image_url:
										"https://firebasestorage.googleapis.com/v0/b/pivechas.appspot.com/o/silueta.png?alt=media&token=d4bd467a-c227-49c9-a120-3c4a119d258a",
								};
								if (previousCart) {
									var cart = {
										items: [...lastcar.items, newramo],
										item_count: lastcar.item_count + 1,
										total_price: lastcar.total_price + newramo.precio,
									};
									localStorage.setItem("cart", JSON.stringify(cart));
									toast.success("Se agregó tu Ramo al Carrito", { icon: <AiOutlineShoppingCart /> });
								} else {
									var cart = {
										items: [newramo],
										item_count: 1,
										total_price: newramo.precio,
									};
									localStorage.setItem("cart", JSON.stringify(cart));
									toast.success("Se agregó tu Ramo al Carrito", { icon: <AiOutlineShoppingCart /> });
								}
							}}
						>
							Finalizar Creación de Ramo
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
export default ArmaTuRamo;
