import './App.css';
import Sidebar from './components/Sidebar';
import Chart from './components/Chart';
import React, {useState} from 'react';

function App() {

  const [state, setState] = useState({vessel_1:false, vessel_2:false, vessel_3:false});
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
