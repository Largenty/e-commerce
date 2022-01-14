import React from "react";

export default function ItemCart() {
  const numberOfItem = 4
  const priceOfItem = 423.28

  const total = (number, price) => {
    return parseFloat(number * price).toFixed(2);
  };

  return (
    <div className="flex justify-between mr-4 w-1/2 mb-2 ">
      <p>Produits 1</p>
      <div className="flex justify-between">
        <button>-</button>
        <p className="ml-4 mr-4">{numberOfItem}</p>
        <button>+</button>
      </div>
      <div className="flex ">
        <p className="mr-4">{total(numberOfItem, priceOfItem)}</p>
        <button className=" hover:bg-red-400 hover:border-red-400 hover:text-white pl-2 pr-2 flex self-center text-gray-400">
          x
        </button>
      </div>
    </div>
  );
}
