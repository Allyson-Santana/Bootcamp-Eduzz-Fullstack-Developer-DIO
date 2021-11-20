import React from "react";
import PetShop from '../PetShop';

function PetShopIDE () {

  const handleClick = () => {
    console.log("Inicciando button");
  }

  return (
    <div>
      REACT
      <PetShop       
        custumersNama='Teste123'
        onClick={handleClick}
        status="completed"
       />
    </div>
  );
}

export default PetShopIDE;