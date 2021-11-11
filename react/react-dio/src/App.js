import Item from './components/Item';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1 className="text-center">My primary app with react</h1>
      <div className="mb-3">        
        <Item> One item  </Item> 
        <Item> Two item  </Item>
        <Item> Tree item </Item>
      </div>
      <Card />
    </div>
  );
}

export default App;
