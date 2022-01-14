import React from "react";
import { useHistory } from "react-router-dom";
import SignIn from "../Sign/In/SignIn";

export default function NavBar() {
  const history = useHistory();
  const homeLink = () => history.push("/");
  const cartLink = () => history.push("/cart");
  const profilLink = () => history.push("/profil");
  return (
    <header className="navbar">
      <nav className="mb-3">
        <ol className="flex justify-between ">
          <li className="link pl-2 pr-2" onClick={homeLink}>E-Vins</li>
          <li className="link">boutique</li>
          <li className="link"><SignIn/></li>
          <li className=" ">
            <button className="uppercase link pl-2 pr-2 focus:outline-none" onClick={profilLink}>profil</button> /{" "}
            <button className="uppercase link pl-2 pr-2 focus:outline-none" onClick={cartLink}>Panié</button>
          </li>
        </ol>
      </nav>
    </header>
  );
}
