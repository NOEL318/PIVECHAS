import "../main.scss";
import Rater from "react-rater";
export const ProductCardSquare = ({ nombre, descripcion, colors, image_url, rate }) => {
	return (
		<>
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
		</>
	);
};
