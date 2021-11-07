import React, {Component} from 'react';
import  ReactDOM  from 'react-dom';

class App extends Component 
{
  constructor(props){
    super(props);

    this.state = {
      clock: '1000',
      glass: 'água'
    }
  }

  changeGlass = () => {
    this.setState({
      glass: "refrigerante"
    });
  }

  render() {

    const {clock, glass} = this.state;

    return (
      <div className="main">
        <h1> { clock } </h1>
        <button onClick={ () => this.changeGlass() } > { glass } </button>
      </div>
    );
  }

}

export default App;