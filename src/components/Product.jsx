import "../main.scss";
export const ProductCardSquare = ({ nombre, descripcion, colors, image_url, id }) => {
	return (
		<>
			<div className="product-square">
				<div className="background"></div>
				<div className="prod-info">
					<h2>{nombre}</h2>
					<p>{descripcion}</p>
					<img
						src={image_url}
						alt=""
						width={200}
					/>
				</div>
			</div>
		</>
	);
};
