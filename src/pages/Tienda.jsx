import "../main.scss";
import blurup from "../assets/group223.png";
import blurright from "../assets/group228.png";
import LeftBar from "../components/LeftBar";
import { ProductCardSquare } from "../components/Product";

export const Tienda = () => {
	const productos = [
		{
			id: 0,
			nombre: "Producto 1",
			colors: ["#ffffff", "#ff0000", "#0000ff"],
			image_url:
				"https://static.vecteezy.com/system/resources/previews/014/033/591/original/sunflower-flower-transparent-free-png.png",
			descripcion: "loremipsum description asahbfahfdgfvv  usdhdsdshhfdsoufdhodsu dsuhfusdhui",
			rate: 1,
		},
		{
			id: 1,
			nombre: "Producto 2",
			colors: ["#ffffff", "#ff0000", "#0000ff"],
			image_url: "https://www.pngplay.com/wp-content/uploads/12/Drawings-Of-Roses-Transparent-PNG.png",
			descripcion: "jjejejejjejej description asahbfahfdgfvv  usdhdsdshhfdsoufdhodsu dsuhfusdhui",
			rate: 2,
		},
		{
			id: 2,
			nombre: "Producto 3",
			colors: ["#ffffff", "#ff0000", "#0000ff"],
			image_url: "https://i.pinimg.com/originals/70/fc/b5/70fcb5965f6336e9c2e21e9c9234da5c.png",
			descripcion: "jjejejejjejej description asahbfahfdgfvv  usdhdsdshhfdsoufdhodsu dsuhfusdhui",
			rate: 5,
		},
		{
			id: 3,
			nombre: "Producto 4",
			colors: ["#ffffff", "#ff0000", "#0000ff"],
			image_url: "https://lavacaindependiente.com/wp-content/uploads/2021/01/MINIATURAFlorDeMayo.png",
			descripcion: "jjejejejjejej description asahbfahfdgfvv  usdhdsdshhfdsoufdhodsu dsuhfusdhui",
			rate: 3,
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
						<div className="products">
							{productos.map((producto) => (
								<ProductCardSquare
									key={producto.id}
									nombre={producto.nombre}
									colors={producto.colors}
									image_url={producto.image_url}
									descripcion={producto.descripcion}
									rate={producto.rate}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Tienda;
