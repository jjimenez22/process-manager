import React from "react";

export default function UniversalButton(props) {
    return (
        <button onClick={props.onClick} className={`btn ${props.class}`}>
            {props.name}
        </button>
    );
}