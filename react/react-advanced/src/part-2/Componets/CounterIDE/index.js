import React,{ Component } from "react";
import Counter from '../Counter';

const Buttons = ({ increment, decrement, count }) => (
  <div>
    <h1>Valor Atual: { count } </h1>
    <div style={{padding: 10, margin: 5}}>
      <button onClick={increment}> Adicionar 1 </button>
      <button onClick={decrement}> remover 1 </button>
    </div>
  </div>
);

class App extends Component {
  render () {
    return (
      <>
          <Counter
            render = { 
            ({ increment, decrement, count }) => (
              <Buttons 
                increment={increment}
                decrement={decrement}
                count={count}
              />
            )
          }>
        </Counter>
      </>
    );
  }
}

export default App;