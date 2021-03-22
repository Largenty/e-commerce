import React from "react";
import ProfilData from "./ProfilData/ProfilData";
import ProfilOrder from "./ProfilOrder/ProfilOrder";

export default function Profil() {
  return (
    <main>
      <div className="flex w-full mt-8 justify-center">
        <div className="flex w-5/6 mt-8 ">
        <ProfilData />        
        <ProfilOrder />
        </div>       
      </div>
    </main>
  );
}
