import React from "react";
import {Link} from "react-router-dom";

export default function EditDeleteButtons(props) {
    return (
        <div>
            <Link to={{
                pathname: props.editPath,
                state: props.editState
            }}>
                <button>edit</button>
            </Link>
            <button onClick={props.onDelete}>
                delete
            </button>
        </div>
    );
}