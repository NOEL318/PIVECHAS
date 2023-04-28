import LeftBar from "../components/LeftBar";
import blurup from "../assets/group223.png";
import blurright from "../assets/group228.png";
import { BsTrash } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const Carrito = () => {
	const storagecart = localStorage.getItem("cart");
	const carrito = JSON.parse(storagecart);
	if (carrito)
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
											<table>
												<thead>
													<td
														className="art"
														colSpan={2}
													>
														Artículo
													</td>
													<td className="qty">Cantidad</td>
													<td className="precio">Precio</td>
													<td className="act">Acciones</td>
												</thead>

												<tbody>
													{carrito.items.map((item) => {
														return (
															<tr>
																<td className="img">
																	<img
																		src={item.image_url}
																		alt=""
																	/>
																</td>
																<td className="art">{item.nombre}</td>
																<td className="qty">
																	<button>
																		<AiOutlineMinus />
																	</button>
																	<input
																		type="number"
																		value={item.quantity}
																	/>

																	<button>
																		<AiOutlinePlus />
																	</button>
																</td>
																<td className="precio">${item.precio}</td>
																<td className="act">
																	<button>
																		<BsTrash />
																	</button>
																</td>
															</tr>
														);
													})}
												</tbody>
											</table>
										</div>
									</div>
									<div className="methods">
										<h3>Métodos de Pago Aceptados</h3>
									</div>
									<div className="totals"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
};
