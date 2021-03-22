import React from "react";

export default function SingleOrder() {
  return (
    <main className="">
      <div className="flex w-full mt-8 justify-around">
        <div className="flex w-5/6 mt-8 justify-around flex-col">
          <h3 className="font-bold text-xl">Commande N° 457893</h3>
          <div className="mt-8">
            <div className="flex justify-between mr-4 w-1/2 mb-2 ">
              <p>
                <span>1</span> x Produits 1
              </p>
              <div className="flex ">
                <p className="mr-4">14.99€</p>
              </div>
            </div>
            <div className="flex justify-between mr-4 w-1/2 mb-2 ">
              <p>
                <span>1</span> x Produits 1
              </p>
              <div className="flex ">
                <p className="mr-4">14.99€</p>
              </div>
            </div>
            <div className="flex justify-between mr-4 w-1/2 mb-2 ">
              <p>
                <span>1</span> x Produits 1
              </p>
              <div className="flex ">
                <p className="mr-4">14.99€</p>
              </div>
            </div>
            <div className="flex justify-between mr-4 w-1/2 mb-2 ">
              <p>
                <span>1</span> x Produits 1
              </p>
              <div className="flex ">
                <p className="mr-4">14.99€</p>
              </div>
            </div>
          </div>
          <div className="mt-4 border-b pb-4 w-1/2">
            <p>
              sous-total: <span>14.99€</span>
            </p>
            <p>
              livraison : <span>14.99€</span>
            </p>
          </div>
          <p className="mt-4 font-bold">Total: 29€</p>
        </div>
      </div>
    </main>
  );
}
