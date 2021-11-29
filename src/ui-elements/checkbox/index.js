import React from "react";
import './index.css';

const CheckBox = (props) => {
    return(
        <div className="brand">
            <input type="checkbox" className="custom-checkbox" disabled={props.disabled}
            id={props.name} data-filter={props.dataAttribute} checked={props.checked} name={props.name} onChange={props.onChange}/>
            <label htmlFor={props.name}>{props.name}</label>
        </div>
    )
}

export default CheckBox;