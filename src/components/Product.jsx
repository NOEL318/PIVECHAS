import { Link, useParams } from "react-router-dom";
import "../main.scss";
import Rater from "react-rater";
import { getDoc, where, query, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import blurup from "../assets/group223.png";
import blurright from "../assets/group228.png";
import LeftBar from "./LeftBar";
import Loader from "react-loaders";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { toast } from "react-toastify";

export const ProductCardSquare = ({ id, nombre, colors, image_url, rate }) => {
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

							<div className="circles">
								{colors.map((color) => (
									<div
										key={color[1] + color[2] + color[3] + color[4]}
										className="color-circle"
										style={{ background: color }}
									></div>
								))}
							</div>
							{/* <p>{colors}</p> */}
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
		const notify = () => toast("Agregado al Carrito de Compra!", { icon: <AiOutlineShoppingCart /> });
		notify();
		var previousCart = localStorage.getItem("cart");
		if (previousCart) {
			var lastcar = JSON.parse(previousCart);
			lastcar.items.filter((element) => {
				if (element.id == producto.id) {
					element.quantity = element.quantity + qty;
					var cart = {
						items: lastcar.items,
						item_count: lastcar.item_count,
						total_price: lastcar.total_price + producto.precio,
					};
					localStorage.setItem("cart", JSON.stringify(cart));
				} else {
					producto.quantity = qty;
					var cart = {
						items: [...lastcar.items, producto],
						item_count: lastcar.item_count + 1,
						total_price: lastcar.total_price + producto.precio,
					};
					localStorage.setItem("cart", JSON.stringify(cart));
				}
			});
		} else {
			producto.quantity = qty;
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
											<br />
											Colores disponibles:
											<div className="circles">
												{producto.colors.map((color) => (
													<div
														key={color[1] + color[2] + color[3] + color[4]}
														className={`color-circle ${selectedcolor == color ? "selected" : ""}`}
														style={{ background: color }}
														onClick={() => setselectedcolor(color)}
													></div>
												))}
											</div>
											<br />
											Precio
											<h1>${producto.precio} MXN</h1>
											<br />
											<div className="buttons">
												<input
													type="number"
													className="qty"
													value={qty}
													min={1}
													onChange={(e) => setqty(parseInt(e.target.value))}
												/>
												<button
													className="button button-wicon"
													onClick={addToCart}
												>
													Añadir al Carrito <AiOutlineShoppingCart className="icon" />
												</button>
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
