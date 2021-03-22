import React from "react";
import ProductHome from "../Product/ProductHome/ProductHome";

export default function Home() {
  return (
    <main className="mt-7">
      {/* // SECTION HOME IMG */}
      <section>
        <div
          className="imgHome bg-home-img bg-cover w-full bg-center bg-no-repeat "
          alt="Image de la page d'accueil"
        />
      </section>

      {/* // SECTION PRODUCT LIST HOME TEMPLATE */}
      <section className="mt-3 w-full">
        <h2 className="text-xl uppercase text-center border-b pb-3">
          Découvrer Nos Vins
        </h2>
        <div className="flex flex-wrap justify-around">
          <ProductHome />
          <ProductHome />
          <ProductHome />
          <ProductHome />
          <ProductHome />
          <ProductHome />
        </div>
      </section>
    </main>
  );
}
