/*
import React, { Component } from "react";
import Twitter from "./Componets/Twitter"; // estados | ciclo de vida

class App extends Component 
{
  state = {
    loading: false,
    actived: true
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true
      })
    }, 3000);
  }
  onRemove = () => {
    this.setState({
      actived: false
    })
  }

  render () {
    const post = [
      {
        title: 'xpto',
        description: 'foo'
      },
      {
        title: 'xpto2',
        description: 'foo2'
      }
    ];

    return(
    <div>
      <button onClick={this.onRemove} > Remover Component </button>
      
      {this.state.actived &&
        <Twitter post={post} loading={this.state.loading} />
      }
    </div>
    );
  }  
}

export default App;

*/

                                    /*************************
                                    ** Aplicando useContext **
                                    *************************/

import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from "./Componets/createContenxt";
import Card from './Componets/Card';

function App() {

  const [token, setToken] = useState();
  useEffect(() => {
    setTimeout(() => {
      setToken('ajdjkbasd76e2d');
    }, 3000);
  }, [])

  return(
    <ThemeContext.Provider value={{...themes.primary, token }}>
      <Card />
    </ThemeContext.Provider>
  );
}

export default App;