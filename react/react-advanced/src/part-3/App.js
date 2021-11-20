import React, { useState } from "react";
import Button from "./Componets/Button";
import Calc from "./Componets/Calc";
import PhotoGallery from './Componets/PhotoGallery';

function App () {

  const photos = [
    "http://placeimg.com/140/60/people",
    "http://placeimg.com/140/60/animals",
    "http://placeimg.com/140/60/nature",
    "http://placeimg.com/140/60/tech",
  ];
  
  const [value, setValue] = useState('');
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const handleClickButton = () => {
    setMin(min + 1);
    setMax(max + 2);
    console.log("Adicionado Mais 1 no MIN 2 e + 2 no MAX");
  }
  const handleClickCalc = ({ target }) => {
    setValue( target.value );
    console.log("OnChange.... click");
  }

  return (
    <>

      <Button onClick={handleClickButton}>
        Aumentar valores de calculo
      </Button>

      <br/><br/>
      <h2>Valor input: { value } - total: {min + max} </h2> 
      
      <Calc min={min} max={max} onChange={handleClickCalc} />

      <br/><br/>
      <PhotoGallery photos={photos} />

    </>
  );
}

export default App;