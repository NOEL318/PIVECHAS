import { onAuthStateChanged } from "firebase/auth";
import blurup from "../assets/group223.png";
import blurright from "../assets/group228.png";
import LeftBar from "../components/LeftBar";
import { auth } from "../firebase";
import { useEffect, useState } from "react";

export const Cuenta = () => {
	const [user, setuser] = useState();
	useEffect(() => {
		onAuthStateChanged(auth, (usr) => {
			if (usr) {
				const uid = usr.uid;
				setuser(usr);
				console.log(uid);
			} else {
				setuser(null);
			}
		});
	}, [auth]);
	if (user)
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
						<LeftBar active={"Cuenta"} />
						<div className="rightbar">
							<div className="right-container">
								<div className="cuenta">
									<div className="background"></div>
									<div className="info">
										<img
											src={user.photoURL}
											className="profile-pic"
											alt=""
										/>
										<div className="form">
											<label htmlFor="name">Email</label>
											<input
												type="text"
												name=""
												id="email"
												placeholder={user.email}
												disabled
											/>
											<label htmlFor="name">Nombre</label>
											<input
												type="text"
												id="name"
												placeholder={user.displayName}
												disabled
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
};
export default Cuenta;
