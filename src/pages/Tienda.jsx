import "../main.scss";
import blurup from "../assets/group223.png";
import blurright from "../assets/group228.png";
import LeftBar from "../components/LeftBar";
import { ProductCardSquare } from "../components/Product";

export const Tienda = () => {
	const productos = [
		{
			id: 1,
			nombre: "Producto 1",
			colors: ["#ffffff", "#ff0000", "#0000ff"],
			image_url: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
			descripcion: "loremipsum description asahbfahfdgfvv  usdhdsdshhfdsoufdhodsu dsuhfusdhui",
		},
		{
			id: 1,
			nombre: "Producto 2",
			colors: ["#ffffff", "#ff0000", "#0000ff"],
			image_url: "https://www.pngplay.com/wp-content/uploads/12/Drawings-Of-Roses-Transparent-PNG.png",
			descripcion: "jjejejejjejej description asahbfahfdgfvv  usdhdsdshhfdsoufdhodsu dsuhfusdhui",
		},
		{
			id: 1,
			nombre: "Producto 3",
			colors: ["#ffffff", "#ff0000", "#0000ff"],
			image_url: "https://www.pngplay.com/wp-content/uploads/12/Drawings-Of-Roses-Transparent-PNG.png",
			descripcion: "jjejejejjejej description asahbfahfdgfvv  usdhdsdshhfdsoufdhodsu dsuhfusdhui",
		},
		{
			id: 1,
			nombre: "Producto 4",
			colors: ["#ffffff", "#ff0000", "#0000ff"],
			image_url: "https://www.pngplay.com/wp-content/uploads/12/Drawings-Of-Roses-Transparent-PNG.png",
			descripcion: "jjejejejjejej description asahbfahfdgfvv  usdhdsdshhfdsoufdhodsu dsuhfusdhui",
		},
	];

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
								{productos.map((producto) => (
									<ProductCardSquare
										key={producto.id}
										id={producto.id}
										nombre={producto.nombre}
										colors={producto.colors}
										image_url={producto.image_url}
										descripcion={producto.descripcion}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Tienda;
