import Rater from "react-rater";
import LeftBar from "../components/LeftBar";

import "../main.scss";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export const Admin = () => {
	const [employee, setemployee] = useState({});
	const [colors, setcolors] = useState(["#000000", "000000", "#000000"]);
	const [email, setemail] = useState();
	const [sucursal, setsucursal] = useState();

	const [code, setcode] = useState();
	useEffect(() => {
		console.log(employee);
	}, [employee]);

	const AddProducto = async () => {
		const docRef = await addDoc(collection(db, "inventario"), employee);
		toast.success("Se agregó el producto");
	};
	const AddEmpleado = async () => {
		setcode(parseInt((Math.random() * (50000 - 50) + 50).toFixed(0)));
		const ref = doc(db, "users", email);
		if (code) {
			await updateDoc(ref, {
				role: "admin",
				code: code,
			});
		}
		toast.success("Se agregó como administrador el empleado");
	};
	// const DeleteProduct=async()=>{
	// 	await deleteDoc(doc(db, "inventario", "DC"));
	// }
	return (
		<>
			<div className="app-container">
				<div className="bars">
					<LeftBar active={"Admin"} />
					<div className="rightbar">
						<div className="right-container">
							<div className="admin">
								<div className="add-product">
									<h1>Agregar Producto</h1>
									<form className="form">
										<input
											type="number"
											placeholder="ID"
											className="text"
											onChange={(e) => {
												temp.id = parseInt(e.target.value);
												setemployee((employee) => ({ ...employee, ...temp }));
											}}
										/>
										<input
											type="text"
											placeholder="Nombre del Producto"
											className="text"
											onChange={(e) => {
												temp.nombre = e.target.value;
												setemployee((employee) => ({ ...employee, ...temp }));
											}}
										/>
										<input
											type="text"
											placeholder="URL de Imagen"
											className="text"
											onChange={(e) => {
												temp.image_url = e.target.value;
												setemployee((employee) => ({ ...employee, ...temp }));
											}}
										/>
										<input
											type="text"
											placeholder="Descripción"
											className="text"
											onChange={(e) => {
												temp.descripcion = e.target.value;
												setemployee((employee) => ({ ...employee, ...temp }));
											}}
										/>
										<input
											type="number"
											placeholder="Precio"
											className="text"
											onChange={(e) => {
												temp.precio = parseFloat(e.target.value);
												setemployee((employee) => ({ ...employee, ...temp }));
											}}
										/>
										<div className="check">
											Calificación
											<Rater
												className="react-rater"
												onRate={({ rating }) => {
													temp.rate = parseInt(rating);
													setemployee((employee) => ({ ...employee, ...temp }));
												}}
											/>
										</div>
										<input
											type="color"
											placeholder="Color 1"
											className="text"
											onChange={(e) => {
												colors[0] = e.target.value;

												setemployee((employee) => ({ ...employee, colors }));
											}}
										/>
										<input
											type="color"
											placeholder="Color 2"
											className="text"
											onChange={(e) => {
												colors[1] = e.target.value;

												setemployee((employee) => ({ ...employee, colors }));
											}}
										/>
										<input
											type="color"
											placeholder="Color 3"
											className="text"
											onChange={(e) => {
												colors[2] = e.target.value;
												setemployee((employee) => ({ ...employee, colors }));
											}}
										/>
										<div className="check">
											<label htmlFor="">Ramo</label>
											<input
												type="checkbox"
												name=""
												id=""
												onChange={(e) => {
													temp.ramo = e.target.checked ? true : false;
													setemployee((employee) => ({ ...employee, ...temp }));
												}}
											/>
										</div>
										<div className="check">
											<label htmlFor="">Elemento de Ramo</label>
											<input
												type="checkbox"
												name=""
												id=""
												onChange={(e) => {
													temp.ramo_element = e.target.checked ? true : false;
													setemployee((employee) => ({ ...employee, ...temp }));
												}}
											/>
										</div>
										<br />
										<table>
											<thead>
												<tr>
													<td>Sucursal</td>
													<td>Cantidad</td>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Sucursal 1</td>
													<td>
														<input
															type="number"
															className="text"
															onChange={(e) => {
																setsucursal((sucursal) => ({ ...sucursal, sucursal1: parseInt(e.target.value) }));

																setemployee((employee) => ({ ...employee, ...sucursal }));
															}}
														/>
													</td>
												</tr>
												<tr>
													<td>Sucursal 2</td>
													<td>
														<input
															type="number"
															className="text"
															onChange={(e) => {
																setsucursal((sucursal) => ({ ...sucursal, sucursal2: parseInt(e.target.value) }));
																setemployee((employee) => ({ ...employee, ...sucursal }));
															}}
														/>
													</td>
												</tr>
												<tr>
													<td>Sucursal 3</td>
													<td>
														<input
															type="number"
															onChange={(e) => {
																setsucursal((sucursal) => ({ ...sucursal, sucursal3: parseInt(e.target.value) }));

																setemployee((employee) => ({ ...employee, ...sucursal }));
															}}
															className="text"
														/>
													</td>
												</tr>
												<tr>
													<td>Sucursal 4</td>
													<td>
														<input
															type="number"
															onChange={(e) => {
																setsucursal((sucursal) => ({ ...sucursal, sucursal4: parseInt(e.target.value) }));
																setemployee((employee) => ({ ...employee, ...sucursal }));
															}}
															className="text"
														/>
													</td>
												</tr>
											</tbody>
										</table>
									</form>
									<br />

									<button
										type="button"
										className="button"
										onClick={AddProducto}
									>
										Agregar Producto
									</button>
								</div>
								<br />
								{/* <div className="add-employee">
									<h1>Eliminar Producto</h1>
									<form className="form">
										<input
											type="number"
											className="text"
											onChange={(e) => {
												setid(parseInt(e.target.value));
											}}
											placeholder="Ingrese el ID del producto:"
										/>
										<button
											type="button"
											className="button"
											onClick={DeleteProduct}
										>
											Eliminar Producto
										</button>
									</form>
								</div> */}
								<br />
								<div>
									<h1>Agregar Empleado</h1>
									<form className="form add-employee">
										<div className="employee">
											<input
												type="email"
												className="text"
												onChange={(e) => {
													setemail(e.target.value);
												}}
												placeholder="Ingrese el email del empleado:"
											/>
											<button
												type="button"
												className="button"
												onClick={AddEmpleado}
											>
												Agregar Empleado
											</button>
										</div>
										<br />
										<br />
										{code && (
											<div className="code">
												<label htmlFor="">Su código para compra en efectivo es:</label>
												<input
													type="text"
													className="text"
													disabled
													placeholder={code}
												/>
											</div>
										)}
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Admin;
