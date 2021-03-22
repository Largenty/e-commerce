import React from "react";
import SignOut from "../../Sign/Out/SignOut";

export default function ProfilData() {
  return (
    <section className="w-1/2 mr-2">
      <h3 className="font-bold text-xl">Votre profil :</h3>
      <div className="mt-4 text-justify">
        <p>Nom: Argenty</p>
        <p>Prénom: Ludovic</p>
        <p>Date de naissance: 01/03/1989</p>
        <p>Téléphone: 0685495376</p>
        <p>Adresse mail: largenty@gmail.com</p>
        <p>Adresse: 269 rue de paris, 91120 Palaiseau</p>
        <p>Adresse de facturation: 269 rue de paris, 91120 Palaiseau</p>
      </div>
      <div>
        <button className="w-full border hover:border-green-400 hover:text-green-400 mt-8 p-4">
          Changer mes informations
        </button>
        <SignOut />
      </div>
    </section>
  );
}
