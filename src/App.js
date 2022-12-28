
import {Select} from './Select';
import {States} from './States'
import { useState} from 'react';
function App() {
  const [state, setState] = useState({});


  const changeState = (newState)=> {
    setState(newState)
    console.log(newState)
  }
  return (
    <div >
      <h1>Situação do Covid no Brasil</h1>
      <Select onChange={changeState}/>
      <States state={state} />
    </div>
  );
}

export default App;
