import React from "react";
import {Link} from "react-router-dom";
import UniversalButton from "./UniversalButton"

export default function EditDeleteButtons(props) {
    return (
        <div className="d-flex justify-content-center">
            <Link to={{
                pathname: props.editPath,
                state: props.editState
            }}>
                <UniversalButton name="Edit" class="btn-acept" icon="far fa-edit"/>
            </Link>
            <UniversalButton name="Delete" onClick={props.onDelete} icon="fas fa-trash"/>
            {props.extra}
        </div>
    );
}