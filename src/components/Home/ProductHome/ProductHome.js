import React from "react";
import { useHistory } from "react-router-dom";

export default function ProductHome() {
  const history = useHistory();
  const itemLink = () => history.push("/item/1");
  return (
    // Simple template for Home page (items product)
    <div className="w-64 m-4 mt-4">
      <div
        className="imgProductHome bg-home-product bg-contain w-full bg-center bg-no-repeat cursor-pointer border-b hover:border-red-300"
        alt="Image de la page d'accueil"
        onClick={itemLink}
      />
      <div className="flex mt-2 ">
        <div className="w-2/3 mt-2">
          <h3 className="text-lg font-bold capitalize">produits1</h3>
          <p className="uppercase">11.99€</p>
        </div>
        <button className=" w-1/3 hover:border-green-300 hover:text-green-300 border focus:outline-none">
          Add
        </button>
      </div>
    </div>
  );
}
