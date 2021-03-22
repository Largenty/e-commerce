import React from 'react'
import { useHistory } from "react-router-dom";

export default function OrderComponent() {
  const history = useHistory();
  const orderLink = () => history.push("/order/1");
  return (
    <div className="flex justify-between hover:border-green-400 hover:text-green-400 border w-full p-4 mt-4 cursor-pointer" onClick={orderLink}>
    <p>Commande n°45756</p>
    <p>Total: 114.54€</p>
  </div>
  )
}
