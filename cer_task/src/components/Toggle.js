import React from 'react';

const Toggle = (props) => {
        return (
            <div className='toggle'>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={() => {props.toggleVessel(props.vessel_id)}}/>
                    <label className="form-check-label" for="flexSwitchCheckDefault">{props.toggleText}</label>
                </div>
            </div>
        )  
}
export default Toggle;