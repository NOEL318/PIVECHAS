import { Link, useParams } from "react-router-dom";
import "../main.scss";
import Rater from "react-rater";
import { getDoc, where, query, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import blurup from "../assets/group223.png";
import blurright from "../assets/group228.png";
import LeftBar from "./LeftBar";
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

	if (producto) {
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
								<div className="producto">
									<div className="background"></div>
									<div className="info">
										<img
											src={producto.image_url}
											className="image_product"
										/>

										<h1>Nombre: {producto.nombre}</h1>
										<p>{producto.descripcion}</p>
										<Rater
											rating={producto.rate}
											total={5}
											interactive={false}
										/>

										<div className="circles">
											{producto.colors.map((color) => (
												<div
													key={color[1] + color[2] + color[3] + color[4]}
													className="color-circle"
													style={{ background: color }}
												>
													.
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
};
