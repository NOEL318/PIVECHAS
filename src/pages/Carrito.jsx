/* El código anterior es un componente de React que muestra una página de carrito de compras. Recupera
los datos del carrito del almacenamiento local y muestra los artículos en una tabla. El usuario
puede actualizar la cantidad de artículos o eliminarlos del carrito. El componente también calcula
el subtotal, el costo de envío y los impuestos, y muestra el monto total a pagar. El usuario puede
elegir entre varios métodos de pago y finalizar el pedido. El componente utiliza varios iconos e
imágenes para mejorar la interfaz de usuario. */

import LeftBar from "../components/LeftBar";
import blurup from "../assets/group223.png";
import blurright from "../assets/group228.png";
import { BsTrash } from "react-icons/bs";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const Carrito = () => {
	const [newprice, setnewprice] = useState();
	const [carrito, setcarrito] = useState();
	useEffect(() => {
		const storagecart = localStorage.getItem("cart");
		const carrit = JSON.parse(storagecart);
		if (carrit) {
			setcarrito(carrit);
			if (carrit.total_price > 0) {
				carrit.iva = carrit.total_price * 0.16;
				carrit.costo_envio = carrit.total_price * 0.05;
				localStorage.setItem("cart", JSON.stringify(carrit));
			}
		}
	}, [newprice]);
	return (
		<>
			<div className="app-container">
				<div className="bars">
					<LeftBar active={"Carrito"} />
					<div className="rightbar">
						<div className="right-container">
							<div className="carrito">
								<div className="list">
									{/* <div className="background"></div> */}
									<div className="info">
										<h1 className="title">Tu Carrito</h1>
										<br />
										<h2 className="title">Artículos</h2>
										<br />
										{carrito ? (
											<table>
												<thead>
													<tr>
														<td
															className="art"
															colSpan={2}
														>
															Artículo
														</td>
														<td className="qty">Cantidad</td>
														<td className="precio">Precio</td>
														<td className="color">Color</td>
														<td className="act">Acciones</td>
													</tr>
												</thead>
												<tbody>
													{carrito.items.map((item) => {
														const addToItem = async (newvalue) => {
															if (!newvalue) {
																var newcartitems = carrito.items.filter((product) => product.id != item.id);
																if (newcartitems.length <= 0) {
																	toast("Se ha eliminado de tu carrito: " + item.nombre);
																	setcarrito();

																	localStorage.removeItem("cart", JSON.stringify(newcart));
																} else {
																	var newcart = {
																		total_price: carrito.total_price,
																		iva: carrito.iva,
																		costo_envio: carrito.total_price,
																		items: newcartitems,
																	};
																	setcarrito(newcart);
																	toast("Se ha eliminado de tu carrito: " + item.nombre);
																	localStorage.setItem("cart", JSON.stringify(newcart));
																}
															} else {
																var x = carrito.total_price - item.precio * item.quantity;
																carrito.iva = carrito.iva - item.precio * item.quantity * 0.16;
																carrito.costo_envio = carrito.costo_envio - item.precio * item.quantity * 0.05;

																carrito.items.find((product) => product.id == item.id).quantity = newvalue;
																setnewprice(carrito.total_price);
																carrito.total_price = x + newvalue * item.precio;
																carrito.iva = carrito.total_price * 0.16;
																carrito.costo_envio = carrito.total_price * 0.05;
																localStorage.setItem("cart", JSON.stringify(carrito));
															}
														};

														const deleteItem = async (cantidad, precio) => {
															var newcartitems = carrito.items.filter((product) => product.id != item.id);

															var pric = cantidad * precio;
															var ivarest = pric * 0.16;
															var newcart = {
																total_price: carrito.total_price - pric,
																iva: carrito.iva - ivarest,
																costo_envio: (carrito.total_price - pric) * 0.05,
																items: newcartitems,
															};
															setcarrito(newcart);
															localStorage.setItem("cart", JSON.stringify(newcart));
															if (newcart.items.length <= 0) {
																setcarrito();
																localStorage.removeItem("cart");
															}
														};
														return (
															<>
																<tr
																	key={item.id}
																	className={`${item.ramo == false ? "normal" : ""}`}
																>
																	<td className="img">
																		<img
																			src={item.image_url}
																			alt=""
																		/>
																	</td>
																	<td className="art">{item.nombre}</td>
																	<td className="qty">
																		<input
																			type="number"
																			defaultValue={item.quantity}
																			min={1}
																			max={item.inventario}
																			onChange={(e) => {
																				if (parseInt(e.target.value) >= item.inventario) {
																					toast("Solo tenemos " + item.inventario + " piezas en inventario");
																				} else {
																					addToItem(parseInt(e.target.value));
																				}
																			}}
																		/>
																		X
																	</td>
																	<td className="precio">
																		{item.precio}= ${item.precio * item.quantity}
																	</td>
																	<td>
																		<div
																			className="circle"
																			style={{ backgroundColor: item.color }}
																		></div>
																	</td>
																	<td className="act">
																		<button
																			type="button"
																			onClick={() => deleteItem(item.quantity, item.precio)}
																		>
																			<BsTrash />
																		</button>
																	</td>
																</tr>
																{item.ramo == true && (
																	<tr className={`${item.ramo == true ? "ramo" : ""}`}>
																		<td colSpan={1}></td>
																		<td>
																			Elementos:
																			<ul>
																				{item.ramo_componentes.map((element) => (
																					<li>
																						{element.nombre} {element.quantity}pzas. x ${element.precio}
																					</li>
																				))}
																			</ul>
																		</td>
																	</tr>
																)}
															</>
														);
													})}
												</tbody>
											</table>
										) : (
											<>
												<h2 className="no-cart">No tienes Artículos en tu Carrito aún!</h2>
											</>
										)}
									</div>
								</div>
								<div className="left-carrito">
									<div className="methods">
										<h3>Métodos de Pago Aceptados</h3>
										<br />
										<table>
											<thead></thead>
											<tbody>
												<tr>
													<td>
														<img
															src="https://firebasestorage.googleapis.com/v0/b/pivechas.appspot.com/o/baz.png?alt=media&token=4366b49b-d618-40b1-9a4e-89ea795e9f13"
															alt=""
															className="method"
														/>
													</td>
													<td className="text">Baz</td>
												</tr>
												<tr>
													<td>
														<img
															className="method"
															src="https://firebasestorage.googleapis.com/v0/b/pivechas.appspot.com/o/mcard.png?alt=media&token=75d807fd-945b-4cc1-b8db-4a64deb08830"
															alt=""
														/>
													</td>
													<td className="text">MasterCard</td>
												</tr>
												<tr>
													<td>
														<img
															className="method"
															src="https://firebasestorage.googleapis.com/v0/b/pivechas.appspot.com/o/mpago.png?alt=media&token=bd59493c-288a-4f9b-a9ad-5939af7e3674"
															alt=""
														/>
													</td>
													<td className="text">Mercado Pago</td>
												</tr>
												<tr>
													<td>
														<img
															src="https://firebasestorage.googleapis.com/v0/b/pivechas.appspot.com/o/ppal.png?alt=media&token=af0399d4-3f0f-4cac-b71b-1079bd52cade"
															alt=""
															className="method"
														/>
													</td>
													<td className="text">PayPal</td>
												</tr>
												<tr>
													<td>
														<img
															className="method"
															src="https://firebasestorage.googleapis.com/v0/b/pivechas.appspot.com/o/vecteezy_3d-illustration-ethereum-coin_10877527_474.png?alt=media&token=4e775455-55da-4a89-a334-7d2515a6d8f4"
															alt=""
														/>
													</td>
													<td className="text">Etherium</td>
												</tr>
												<tr>
													<td>
														<img
															className="method"
															src="https://firebasestorage.googleapis.com/v0/b/pivechas.appspot.com/o/vecteezy_bitcoin-3d-illustration_13391065_286.png?alt=media&token=f8813b46-1268-4bae-8dba-db87bf45be98"
															alt=""
														/>
													</td>
													<td className="text">BitCoin</td>
												</tr>
												<tr>
													<td>
														<img
															src="https://firebasestorage.googleapis.com/v0/b/pivechas.appspot.com/o/visa.png?alt=media&token=e876127d-e1fa-48bc-ae0d-250ac9fa3bad"
															alt=""
															className="method-wr"
														/>
													</td>
													<td className="text">Visa</td>
												</tr>
											</tbody>
										</table>
									</div>
									{carrito && (
										<div className="totals">
											<h3>Subtotal:</h3>
											<p>$ {carrito.total_price.toFixed(2)}</p>
											<br />
											+
											<br />
											<h3>Costo de envío:</h3>
											<p>$ {carrito.costo_envio.toFixed(2)}</p>
											<br />
											+
											<br />
											<h3>I.V.A:</h3>
											<p>$ {carrito.iva.toFixed(2)}</p>
											<br />
											<hr className="hr" />
											<h3>Total a pagar: $ {(carrito.total_price * 1.16 + carrito.costo_envio + carrito.iva).toFixed(2)}</h3>
											{carrito.total_price > 0 && (
												<Link to={"/Finalizar_Pedido"}>
													<button className="button">Finalizar Pedido</button>
												</Link>
											)}
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
