import React from "react";

export default function SingleItem() {
  return (
    <main>
      <div className="flex w-full items-center mt-10">
        <div className="w-2/3 mr-4">
          <div
            className="img bg-home-product bg-contain w-full bg-center bg-no-repeat cursor-pointer "
            alt="Image de la page d'accueil"
          />
        </div>
        <div className="w-1/3 ml-4">
          <div className="w-2/3">
            <h3 className="font-bold text-xl">Titre du produit</h3>
            <p className="text-justify mt-4">
              Description du produit : Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Quae eveniet voluptatibus odit esse nemo qui,
              tempore ad quaerat quos eligendi illum ab, fugit culpa dolor harum
              quia ipsa. Aut quibusdam commodi et neque officia aliquid
              reprehenderit libero aliquam inventore ratione delectus nostrum,
              quam officiis sunt ullam expedita quae asperiores. Quis!
            </p>
            <p className=" mt-4">
              {" "}
              Bouteille de <span>75cl</span>.{" "}
            </p>
            <p className=" mt-2">
              {" "}
              Taux d'alcool: <span>7.5°</span>.{" "}
            </p>
            <p className=" mt-2">
              {" "}
              Année de production: <span>2020</span>.{" "}
            </p>
            <div className="flex mt-2">
              <p className="mr-4 ">Nombre de bouteille :</p>
              <button>-</button>
              <p className="ml-4 mr-4">2</p>
              <button>+</button>
            </div>

            <p className="font-bold mt-4">
              {" "}
              Prix: <span>14.99€</span>{" "}
            </p>
            <button className="w-full border hover:border-green-400 hover:text-green-400 mt-8 p-4">
              Acheter
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
