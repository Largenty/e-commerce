import React from "react";
import OrderList from "./Order/OrderList/OrderList";

export default function ProfilOrder() {
  return (
    <section className="w-1/2 ml-4">
      <h3 className="font-bold text-xl">Vos commandes :</h3>
      <OrderList />
    </section>
  );
}
