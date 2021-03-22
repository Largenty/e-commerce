import React from "react";
import Cart from "./Cart/Cart";
import TotalCart from "./TotalCart/TotalCart";

export default function ShoppingCart() {
  return (
    <main className="flex mt-4">
      <Cart />
      <TotalCart />
    </main>
  );
}
