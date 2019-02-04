import React from "react";
import EditDeleteButtons from "../../commons/EditDeleteButtons";

export default function DictumRow(props) {
    const editButtons = (
        <EditDeleteButtons
            editPath="/dictum/edit"
            editState={{dictum: props.dictum}}
            onDelete={() => {
                props.onDelete(props.id)
            }}
        />
    );
    return (
        <tr>
            <td>{props.dictum.title}</td>
            <td>{props.dictum.description}</td>
            <td>{editButtons}</td>
        </tr>
    );
}