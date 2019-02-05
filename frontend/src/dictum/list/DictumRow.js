import React from "react";

export default function DictumRow(props) {
    const deleteButton = (
        <button
            onClick={() => {
                props.onDelete(props.id)
            }}
        >
            Delete
        </button>
    );
    return (
        <tr>
            <td>{props.dictum.title}</td>
            <td>{props.dictum.content}</td>
            <td>{deleteButton}</td>
        </tr>
    );
}