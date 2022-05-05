import React from 'react';

const Toggle = (props) => {
        return (
            <div className='toggle' >
                <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                     <label className="custom-control-label" htmlFor="customSwitch1">{props.toggleText}</label>
                </div>
            </div>
        )  
}
export default Toggle;