import React from 'react';
import Toggle from './Toggle';
// import {Button} from 'reactstrap';

const Sidebar =() => {
        return (
            <div className='sidebar'>
                <h3>Water Quality:</h3>
                <p>View All Device Metrics here</p>
                <Toggle toggleText='Vessel 1'></Toggle>
                <Toggle toggleText='Vessel 2'></Toggle>
                <Toggle toggleText='Vessel 3'></Toggle>
            </div>
        ) 
}
export default Sidebar;