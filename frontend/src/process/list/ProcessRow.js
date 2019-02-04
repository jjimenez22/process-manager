import React from "react";
import EditDeleteButtons from "../../commons/EditDeleteButtons";

export default function ProcessRow(props) {
    const editButtons = (
        <EditDeleteButtons
            editPath="/process/edit"
            editState={{process: props.process}}
            onDelete={() => {
                props.onDelete(props.id)
            }}
        />
    );
    return (
        <tr>
            <td>{props.process.name}</td>
            <td>{props.process.description}</td>
            <td>{editButtons}</td>
        </tr>
    );
}