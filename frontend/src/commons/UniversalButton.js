import React from "react";

export default function UniversalButton(props) {
    return (
        <button onClick={props.onClick} className={`btn${props.class ? ` ${props.class}` : ''}`}>
            {
                props.icon && <i className={`hide-icon-large ${props.icon}`}></i>
            }
            {
                props.icon ? <span className="hide-name-small">{props.name}</span>
                    : props.name
            }
        </button>
    );
}