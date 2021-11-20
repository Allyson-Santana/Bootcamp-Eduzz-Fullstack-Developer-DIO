import React from "react";

function Fruits () {
    const fruitsJuices = ['apple', 'banana', 'orange'];

    const showFruitsJuices = (element, key) => {
      return ( 
          <tr key={key} >
            <td> { element } </td>
          </tr>
      )
    }
  
    return(
      <table>
        {fruitsJuices.map(showFruitsJuices)}
      </table>
    );
}

export default Fruits;