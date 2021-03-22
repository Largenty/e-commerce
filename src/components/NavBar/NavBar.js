import React from "react";

export default function NavBar() {
  return (
    <header className="navbar">
      <nav className="mb-3">
        <ol className="flex justify-between ">
          <li className=" link">E-Vins</li>
          <li className=" link">boutique</li>
          <li className=" ">
            <button className="uppercase link">profil</button> /{" "}
            <button className="uppercase link">Panié</button>
          </li>
        </ol>
      </nav>
    </header>
  );
}
