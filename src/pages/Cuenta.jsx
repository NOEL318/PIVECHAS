/* Este es un componente de React llamado `Cuenta` que muestra la información de la cuenta del usuario.
Importa varias dependencias como `onAuthStateChanged` de Firebase, imágenes y otros componentes.
Utiliza los ganchos `useState` y `useEffect` para administrar el estado y realizar efectos
secundarios respectivamente. La función `onAuthStateChanged` se utiliza para detectar cambios en el
estado de autenticación del usuario y actualizar el estado del `usuario` en consecuencia. Si hay un
usuario, muestra su foto de perfil, correo electrónico y nombre en los campos de entrada. Si no hay
ningún usuario, no muestra nada. */

import { onAuthStateChanged } from "firebase/auth";
import blurup from "../assets/group223.png";
import blurright from "../assets/group228.png";
import LeftBar from "../components/LeftBar";
import { auth, db } from "../firebase";
import { useEffect, useState } from "react";
import { GoVerified } from "react-icons/go";
import { doc, getDoc } from "firebase/firestore";

export const Cuenta = () => {
	const [user, setuser] = useState();
	const [account, setaccount] = useState();
	const date = new Date();

	useEffect(() => {
		onAuthStateChanged(auth, async (usr) => {
			if (usr) {
				setuser(usr);
				const docRef = doc(db, "users", usr.email);
				const docSnap = await getDoc(docRef);
				setaccount(docSnap.data());
			} else {
				setuser(null);
			}
		});
	}, [auth]);
	if (user && account) {
		var d = new Date(account.membresia.start);
		var cd = new Date();
		var endd = account.membresia.start + 30 * 24 * 60 * 60 * 1000;
		var ed = new Date(endd);
		return (
			<>
				<div className="app-container">
					<div className="bars">
						<LeftBar active={"Cuenta"} />
						<div className="rightbar">
							<div className="right-container">
								<div className="cuenta">
									<div className="info">
										<img
											src={`https://api.multiavatar.com/young-${user.uid}${date.getHours()}.svg`}
											className="profile-pic"
											alt=""
										/>
										<h1>
											{account.nombre + " " + account.appaterno + " " + account.apmaterno}{" "}
											{user.emailVerified ? <GoVerified size={25} /> : ""}
										</h1>
										<div className="form">
											<div className="input">
												<label htmlFor="name">Email</label>
												<input
													type="text"
													name=""
													id="email"
													placeholder={user.email}
													disabled
												/>
											</div>
											<div className="input">
												<label htmlFor="direccion">Dirección</label>
												<input
													type="text"
													name=""
													id="direccion"
													placeholder={account.direccion}
													disabled
												/>
											</div>
											<div className="input">
												<label htmlFor="edad">Edad</label>
												<input
													type="text"
													name=""
													id="edad"
													placeholder={account.edad}
													disabled
												/>
											</div>
										</div>
										<div className="membresia">
											<hr />
											<br />
											<h1>Membresía</h1>
											<div className="info-membership">
												<div className="input">
													<label htmlFor="edad">Tipo de Membresía</label>
													<input
														type="text"
														name=""
														id="edad"
														placeholder={account.membresia.nombre}
														disabled
													/>
												</div>
												<div className="input">
													<label htmlFor="edad">Costo</label>
													<input
														type="text"
														name=""
														id="edad"
														placeholder={"$" + account.membresia.cost + "mxn."}
														disabled
													/>
												</div>
												<div className="input">
													<label htmlFor="start">Inició: </label>
													<input
														type="text"
														name=""
														id="start"
														placeholder={d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()}
														disabled
													/>
												</div>
												<div className="input">
													<label htmlFor="end">Termina: </label>
													<input
														type="text"
														name=""
														id="end"
														placeholder={ed.getDate() + "/" + (ed.getMonth() + 1) + "/" + ed.getFullYear()}
														disabled
													/>
												</div>
												<div className="input">
													<label htmlFor="duracion">Duración: </label>
													<input
														type="text"
														name=""
														id="duracion"
														placeholder={account.membresia.duration / 24 / 60 / 60 + " Días"}
														disabled
													/>
												</div>
												<div className="input">
													<label htmlFor="quedan">Quedan: </label>
													<input
														type="text"
														name=""
														id="edad"
														placeholder={((endd - cd.getTime()) / 24 / 60 / 60 / 1000).toFixed(0) + " Días"}
														disabled
													/>
												</div>
											</div>
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
export default Cuenta;
