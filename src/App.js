import {useState, useEffect} from 'react';
import './App.css';
import Coffees from './Coffees';

function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() =>{ 
    console.log('useEffect was run...')
    setCounter(500)
  }, [])
  return (
    <div className="App">
      <header className="App-header">
       <h1>Counter: {counter}</h1>
       <button onClick={() => setCounter(counter + 1)}> 
         + </button>
&nbsp;
         <button onClick={() => setCounter(0)}> 
         Reset </button>
&nbsp;
         <button onClick={() => setCounter(counter - 1)}> 
         - </button>
<Coffees/>
      </header>
    </div>
  );
}

export default App;
