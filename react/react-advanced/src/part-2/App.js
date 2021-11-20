import React, { useRef } from "react";
import Fruits from './Componets/Fruits';
import CounterIDE from './Componets/CounterIDE';
import PetShopIDE from './Componets/PetShop';

function App () {

  const inputRef = useRef();
  const count = useRef(1);

  const handleClick = () => {
    inputRef.current.focus();
    console.log("Input:curret",  inputRef.current);
  }

  useEffect(() => {
   setTimeout(() => {
     console.log("Passou no useEffect");
     count.current = 300
   }, 3000);
  }, [])

  return (
    <div>
      <h1>Valor do Count: { count.current }</h1>
      <label>Foco: </label>
      <input ref={inputRef} />
      <br />
      <br />
      <button onClick={handleClick} >Focar</button>
    </div>
  );
}

export default App;