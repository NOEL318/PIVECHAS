/* Este es un componente de React llamado `Tienda` que muestra una lista de productos obtenidos de una
base de datos de Firebase. Importa varias dependencias, como hojas de estilo, componentes y
funciones de Firebase. Utiliza los ganchos `useState` y `useEffect` para administrar el estado y
obtener datos respectivamente. También utiliza la representación condicional para mostrar un
cargador mientras se obtienen los datos y la lista de productos real una vez que los datos están
disponibles. La lista de productos se muestra utilizando el componente `ProductCardSquare`.
Finalmente, exporta el componente `Tienda` como exportación por defecto. */

import "../main.scss";
import blurup from "../assets/group223.png";
import blurright from "../assets/group228.png";
import LeftBar from "../components/LeftBar";
import { ProductCardSquare } from "../components/Product";
import { collection, getDocs, where, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Loader from "react-loaders";
import { AiOutlinePlus } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
export const Tienda = () => {
	const { sucursal } = useParams();
	const [productos, setproductos] = useState([]);
	const getProductsList = async () => {
		setproductos([]);
		if (!sucursal) {
			const querySnapshot = await getDocs(collection(db, "inventario"));
			setproductos([]);
			querySnapshot.forEach((doc) => {
				setproductos((productos) => [...productos, doc.data()]);
			});
		} else {
			setproductos([]);
			const querySnapshot = await getDocs(query(collection(db, "inventario"), where(`inventario.sucursal${sucursal}`, ">", 0)));
			querySnapshot.forEach((doc) => {
				setproductos((productos) => [...productos, doc.data()]);
			});
		}
	};
	useEffect(() => {
		getProductsList();
	}, [sucursal]);

	return (
		<>
			<div className="app-container">
				<div className="bars">
					<LeftBar active={"Tienda"} />

					<div className="rightbar column">
						<h1>Nuestros productos</h1>
						{productos.length >= 1 ? (
							<div className="products">
								<div className="product-square">
									<div className="background"></div>
									<div className="prod-info">
										<br />
										<br />
										<img
											src={"https://i.pinimg.com/736x/ec/6e/17/ec6e173dd9a9d7867104851c5f0a0661.jpg"}
											alt=""
											className="product_image"
										/>
										<div className="product-text">
											<h2>{"Arma Tu Ramo Buchón"}</h2>
										</div>
										<br />
										<Link to={"/Tienda/ArmaTuRamoBuchon"}>
											<div className="cart-button">
												<button className="button button-wicon">
													<AiOutlinePlus className="icon" />
												</button>
											</div>
										</Link>
									</div>
								</div>

								{productos.map((producto) => {
									return (
										<ProductCardSquare
											key={producto.id}
											id={producto.id}
											nombre={producto.nombre}
											colors={producto.colors}
											image_url={producto.image_url}
											descripcion={producto.descripcion}
											rate={producto.rate}
											precio={producto.precio}
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
