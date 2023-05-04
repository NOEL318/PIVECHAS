import LeftBar from "../components/LeftBar";
import blurup from "../assets/group223.png";
import blurright from "../assets/group228.png";
import { BsTrash } from "react-icons/bs";
import { useEffect, useState } from "react";

export const Carrito = () => {
	const [newprice, setnewprice] = useState();
	const [carrito, setcarrito] = useState();
	useEffect(() => {
		const storagecart = localStorage.getItem("cart");
		const carrit = JSON.parse(storagecart);
		if (carrit) {
			setcarrito(carrit);
			carrit.iva = carrit.total_price * 0.16;
			carrit.costo_envio = carrit.total_price * 0.05;

			localStorage.setItem("cart", JSON.stringify(carrit));
		}
	}, [newprice]);
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
														<td className="act">Acciones</td>
													</tr>
												</thead>
												<tbody>
													{carrito.items.map((item) => {
														const addToItem = async (newvalue) => {
															var x = carrito.total_price - item.precio * item.quantity;
															carrito.items.find((product) => product.id == item.id).quantity = newvalue;
															setnewprice(carrito.total_price);

															carrito.total_price = x + newvalue * item.precio;
															localStorage.setItem("cart", JSON.stringify(carrito));
														};

														const deleteItem = async (cantidad, precio) => {
															var newcartitems = carrito.items.filter((product) => product.id != item.id);
															console.log(newcartitems, "ssdhabhdba");
															var pric = cantidad * precio;
															var newcart = {
																total_price: carrito.total_price - pric,
																iva: carrito.iva - pric * 0.16,
																costo_envio: (carrito.total_price - pric) * 0.05,
																items: newcartitems,
															};
															setcarrito(newcart);
															localStorage.setItem("cart", JSON.stringify(newcart));
														};
														return (
															<tr key={item.id}>
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
																		onChange={(e) => addToItem(parseInt(e.target.value))}
																	/>
																	X
																</td>
																<td className="precio">
																	{item.precio}= ${item.precio * item.quantity}
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
									</div>
									{carrito && (
										<div className="totals">
											<h3>Subtotal:</h3>
											<p>$ {carrito.total_price.toFixed(2)}</p>
											<br />
											+
											<br />
											<h3>Costo de envío:</h3>
											<p>$ {(carrito.costo_envio * 0.05).toFixed(2)}</p>
											<br />
											+
											<br />
											<h3>I.V.A:</h3>
											<p>$ {(carrito.iva * 0.16).toFixed(2)}</p>
											<br />
											<hr className="hr" />
											<h3>Total a pagar: $ {(carrito.total_price * 1.16 + carrito.total_price * 0.05).toFixed(2)}</h3>
											{carrito.total_price <= 0 && <button className="button">Finalizar Pedido</button>}
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
