import "../main.scss";
import blurup from "../assets/group223.png";
import blurright from "../assets/group228.png";
import LeftBar from "../components/LeftBar";
import { ProductCardSquare } from "../components/Product";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Loader from "react-loaders";

export const Tienda = () => {
	const [productos, setproductos] = useState([]);
	const getProductsList = async () => {
		const querySnapshot = await getDocs(collection(db, "inventario"));
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
						{productos.length >= 2 ? (
							<div className="products">
								{productos.map((producto) => {
									console.log(producto);
									return (
										<ProductCardSquare
											key={producto.id}
											id={producto.id}
											nombre={producto.nombre}
											colors={producto.colors}
											image_url={producto.image_url}
											descripcion={producto.descripcion}
											rate={producto.rate}
										/>
									);
								})}
							</div>
						) : (
							<div className="loader">
								<Loader type="pacman" />
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
export default Tienda;
