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
											src={`https://api.multiavatar.com/young-${date.getHours()}.svg`}
											className="profile-pic"
											alt=""
										/>
										<div className="form">
											<h1>
												{account.nombre + " " + account.appaterno + " " + account.apmaterno}{" "}
												{user.emailVerified ? <GoVerified size={25} /> : ""}
											</h1>

											<label htmlFor="name">Email</label>
											<input
												type="text"
												name=""
												id="email"
												placeholder={user.email}
												disabled
											/>
											<label htmlFor="direccion">Dirección</label>
											<input
												type="text"
												name=""
												id="direccion"
												placeholder={account.direccion}
												disabled
											/>
											<label htmlFor="edad">Edad</label>
											<input
												type="text"
												name=""
												id="edad"
												placeholder={account.edad}
												disabled
											/>
										</div>
										<div className="membresia">
											<hr />
											<br />
											<h1>Membresía</h1>
											<div className="info-membership">
												<label htmlFor="edad">Tipo de Membresía</label>
												<input
													type="text"
													name=""
													id="edad"
													placeholder={account.membresia.nombre}
													disabled
												/>
												<label htmlFor="edad">Costo</label>
												<input
													type="text"
													name=""
													id="edad"
													placeholder={"$" + account.membresia.cost + "mxn."}
													disabled
												/>
												<label htmlFor="edad">Inició: </label>
												<input
													type="text"
													name=""
													id="edad"
													placeholder={d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()}
													disabled
												/>
												<label htmlFor="edad">Termina: </label>
												<input
													type="text"
													name=""
													id="edad"
													placeholder={ed.getDate() + "/" + (ed.getMonth() + 1) + "/" + ed.getFullYear()}
													disabled
												/>
												<label htmlFor="edad">Duración: </label>
												<input
													type="text"
													name=""
													id="edad"
													placeholder={account.membresia.duration / 24 / 60 / 60 + " Días"}
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
			</>
		);
	}
};
export default Cuenta;
