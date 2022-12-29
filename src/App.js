
import {Select} from './Select';
import {States} from './States'
import { useState} from 'react';
import {Map} from './Map';

function App() {
  const [state, setState] = useState({});


  const changeState = (newState)=> {
    setState(newState)
  }
  return (
    <div >
      <h1>Situação do Covid no Brasil</h1>
      <Select onChange={changeState}/>
      <States state={state} />
      <Map state={state} />
    </div>
  );
}

export default App;
