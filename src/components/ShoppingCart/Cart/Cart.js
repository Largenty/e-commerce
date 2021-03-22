import React from "react";
import ListItemsCart from "./ListItemsCart/ListItemsCart";

export default function Cart() {
  return (
    <div className="w-2/3">
      <h3 className="font-bold">Votre panier :</h3>
      <ListItemsCart />
    </div>
  );
}
