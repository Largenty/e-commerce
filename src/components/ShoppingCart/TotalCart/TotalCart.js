import React from "react";
import Delivery from "./Delivery.js/Delivery";
import Purchase from "./Purchase.js/Purchase";
import SubTotal from "./SubTotal.js/SubTotal";
import Total from "./Total/Total";

export default function TotalCart() {
  return (
    <div className="w-1/3 ml-8 ">
      <h3 className="font-bold">Montant de votre commande :</h3>
      <div className="mt-4 border-b pb-4">
        <SubTotal />
        <Delivery />
      </div>
      <Total />
      <Purchase />
    </div>
  );
}
