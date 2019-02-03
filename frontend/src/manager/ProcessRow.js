import React from "react";

export default function ProcessRow(props) {
    return (
        <tr>
            <td>{props.process.name}</td>
            <td>{props.process.description}</td>
        </tr>
    );
}