import React from 'react';
import Toggle from './Toggle';

const Sidebar = (props) => {

        return (
            <div className='sidebar'>
                <h3>Water Quality:</h3>
                <p>View All Device Metrics here</p>
                <Toggle vessel_id='vessel_1'toggleText='Vessel 1' state={props.state} toggleVessel={props.onChange}></Toggle>
                <Toggle vessel_id='vessel_2' toggleText='Vessel 2' state={props.state} toggleVessel={props.onChange}></Toggle>
                <Toggle vessel_id='vessel_3' toggleText='Vessel 3' state={props.state} toggleVessel={props.onChange}></Toggle>
            </div>
        ) 
}
export default Sidebar;