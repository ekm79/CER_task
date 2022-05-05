import './App.css';
import Sidebar from './components/Sidebar';
import Chart from './components/Chart';
import React, {useState} from 'react';

function App() {

  const [state, setState] = useState({vessel_1:true, vessel_2:true, vessel_3:true});
  let vessel_1 = state.vessel_1;
  let vessel_2 = state.vessel_2;
  let vessel_3 = state.vessel_3;

  function handleChange(val) {
      console.log(state)
      setState(prevState =>{
          return ({...prevState, [val]: !prevState[val]})
      } )
  }

  return (
    <div className="App">
      <Sidebar state={state} onChange={handleChange}/>
      <Chart state={state}/>
    </div>
  );
}

export default App;
