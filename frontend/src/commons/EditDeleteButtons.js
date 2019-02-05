import React from "react";
import {Link} from "react-router-dom";

export default function EditDeleteButtons(props) {
    return (
        <div>
            <Link to={{
                pathname: props.editPath,
                state: props.editState
            }}>
                <button>Edit</button>
            </Link>
            <button onClick={props.onDelete}>
                Delete
            </button>
            {props.extra}
        </div>
    );
}