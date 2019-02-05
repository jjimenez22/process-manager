import React from "react";
import EditDeleteButtons from "../../commons/EditDeleteButtons";
import {DICTUM_FORM, PROCESS_EDIT} from "../../commons/routes";
import {Link} from "react-router-dom";

export default function ProcessRow(props) {
    const editButtons = (
        <EditDeleteButtons
            editPath={PROCESS_EDIT}
            editState={{process: props.process}}
            onDelete={() => {
                props.onDelete(props.id)
            }}
        />
    );
    const dictumsButton = (
        <Link to={{
            pathname: DICTUM_FORM,
            state: {
                userHref: props.userHref,
                process: props.process
            }
        }}>
            <button>Comment</button>
        </Link>
    );
    return (
        <tr>
            <td>{props.process.name}</td>
            <td>{props.process.description}</td>
            <td>{props.isDictum ?
                dictumsButton :
                editButtons}</td>
        </tr>
    );
}