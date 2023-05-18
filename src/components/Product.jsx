/* El código anterior es un componente JavaScript React que muestra una tarjeta de producto y una
página de producto. El componente `ProductCardSquare` muestra una tarjeta cuadrada con información
del producto, como nombre, imagen, calificación, colores y precio. El componente `ProductPage`
muestra información detallada sobre un producto específico, incluido su nombre, imagen,
calificación, colores, precio, descripción e inventario. También permite al usuario agregar el
producto a su carrito y muestra un cargador mientras se obtienen los datos de la base de datos. El
código utiliza varias bibliotecas React como `react-router-dom`, `react-rater`, */

import { Link, useParams } from "react-router-dom";
import "../main.scss";
import Rater from "react-rater";
import { getDoc, where, query, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Fragment, useEffect, useState } from "react";
import blurup from "../assets/group223.png";
import blurright from "../assets/group228.png";
import LeftBar from "./LeftBar";
import Loader from "react-loaders";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { toast } from "react-toastify";
import { GoVerified } from "react-icons/go";

import { Tooltip } from "react-tooltip";

export const ProductCardSquare = ({ id, nombre, colors, image_url, rate, precio }) => {
	return (
		<>
			<Link to={`product-page/${id}`}>
				<div className="product-square">
					<div className="background"></div>
					<div className="prod-info">
						<img
							src={image_url}
							alt=""
							className="product_image"
						/>
						<div className="product-text">
							<h2>{nombre}</h2>
							<Rater
								total={5}
								rating={rate}
								interactive={false}
							/>

							{colors && (
								<div className="circles">
									{colors.map((color) => (
										<div
											key={color[1] + color[2] + color[3] + color[4]}
											className="color-circle"
											style={{ background: color }}
										></div>
									))}
								</div>
							)}
							<br />
							<h2>$ {precio}mxn</h2>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
};
export const ProductPage = () => {
	const { id } = useParams();
	const [producto, setproducto] = useState();
	const [selectedcolor, setselectedcolor] = useState();
	const [qty, setqty] = useState(1);

	const addToCart = async () => {
		const notify = () => toast.success("Agregado al Carrito de Compra!", { icon: <AiOutlineShoppingCart /> });
		notify();
		var previousCart = localStorage.getItem("cart");
		if (previousCart) {
			var lastcar = JSON.parse(previousCart);
			var items = lastcar.items;
			if (items.length >= 1) {
				lastcar.items.filter((element) => {
					if (element.id == producto.id) {
						element.quantity = element.quantity + qty;
						element.color = selectedcolor;
						var cart = {
							items: lastcar.items,
							item_count: lastcar.item_count,
							total_price: lastcar.total_price + producto.precio,
						};
						localStorage.setItem("cart", JSON.stringify(cart));
					} else {
						producto.quantity = qty;
						producto.color = selectedcolor;
						var cart = {
							items: [...lastcar.items, producto],
							item_count: lastcar.item_count + 1,
							total_price: lastcar.total_price + producto.precio,
						};
						localStorage.setItem("cart", JSON.stringify(cart));
					}
				});
			} else {
				localStorage.removeItem("cart");
				producto.quantity = qty;
				producto.color = selectedcolor;

				var cart = {
					items: [producto],
					item_count: +1,
					total_price: producto.precio,
				};
				localStorage.setItem("cart", JSON.stringify(cart));
			}
		} else {
			producto.quantity = qty;
			producto.color = selectedcolor;

			var cart = {
				items: [producto],
				item_count: +1,
				total_price: producto.precio,
			};
			localStorage.setItem("cart", JSON.stringify(cart));
		}
	};

	const getData = async () => {
		const q = query(collection(db, "inventario"), where("id", "==", parseInt(id)));
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			setproducto(doc.data());
		});
	};
	useEffect(() => {
		getData();
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
							{producto ? (
								<div className="producto">
									<div className="background"></div>
									<div className="info">
										<div className="image">
											<img
												src={producto.image_url}
												className="image_product"
											/>
										</div>
										<div className="actions">
											<h1>{producto.nombre}</h1>
											{producto.colors && (
												<>
													<br />
													Colores disponibles:
													<div className="circles">
														{producto.colors.map((color) => (
															<div
																key={color[1] + color[2] + color[3] + color[4]}
																className={`color-circle ${selectedcolor == color ? "selected" : ""}`}
																style={{ background: color }}
																onClick={() => setselectedcolor(selectedcolor == color ? "" : color)}
															></div>
														))}
													</div>
												</>
											)}
											<br />
											Precio
											<h1>${producto.precio} MXN</h1>
											<br />
											<p>En Inventario:</p>
											<br />
											<table className="inventario-tabla">
												<thead>
													<tr>
														<td>Sucursal</td>
														<td>Cantidad</td>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>1</td>
														<td>{producto.inventario.sucursal1}</td>
													</tr>
													<tr>
														<td>2</td>
														<td>{producto.inventario.sucursal2}</td>
													</tr>
													<tr>
														<td>3</td>
														<td>{producto.inventario.sucursal3}</td>
													</tr>
													<tr>
														<td>4</td>
														<td>{producto.inventario.sucursal4}</td>
													</tr>
												</tbody>
											</table>
											<br />
											<div className="buttons">
												<input
													type="number"
													className="qty"
													value={qty}
													min={1}
													onChange={(e) => {
														if (
															parseInt(e.target.value) > producto.inventario.sucursal1 &&
															parseInt(e.target.value) > producto.inventario.sucursal2 &&
															parseInt(e.target.value) > producto.inventario.sucursal3 &&
															parseInt(e.target.value) > producto.inventario.sucursal4
														) {
															toast("No tenemos tanto inventario de este producto", { type: "warning" });
														} else {
															setqty(parseInt(e.target.value));
														}
													}}
												/>

												{!selectedcolor && (
													<Tooltip
														id="my-2tooltip"
														clickable
													/>
												)}
												<a
													data-tooltip-id="my-2tooltip"
													data-tooltip-content={`Antes de agregar al carrito debes seleccionar una variante de color`}
												>
													<button
														className={`button button-wicon`}
														onClick={addToCart}
														disabled={selectedcolor ? false : producto.colors ? true : false}
													>
														Añadir al Carrito <AiOutlineShoppingCart className="icon" />
													</button>
												</a>
												{producto.ramo_element == true && (
													<>
														<Tooltip
															id="my-tooltip"
															clickable
														/>
														<a
															data-tooltip-id="my-tooltip"
															data-tooltip-content={`Participa en: 'Arma tu ramo Buchón', clic en el ícono
																	para mas info.`}
														>
															<GoVerified className="verified" />
														</a>
													</>
												)}
											</div>
										</div>
									</div>
									<div className="description">
										<div className="rate">
											<h3>Calificación:</h3>
											<Rater
												rating={producto.rate}
												total={5}
												interactive={false}
											/>
										</div>
										<h3>Descripción</h3>
										<p>{producto.descripcion}</p>

										{producto.ramo == true && (
											<div className="ramo-description">
												<h3>Elementos</h3>
												<ul>
													{producto.ramo_componentes.map((elemento) => (
														<li>{elemento}</li>
													))}
												</ul>
											</div>
										)}
									</div>
								</div>
							) : (
								<div className="loader">
									<Loader type="pacman" />
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
