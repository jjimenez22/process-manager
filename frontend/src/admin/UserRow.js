import React from "react";

export default function UserRow(props) {
    return (
        <tr>
            <td>{props.user.username}</td>
            <td>{props.user.firstName}</td>
            <td>{props.user.lastName}</td>
            <td>{props.user.role}</td>
            <td>
                <button>edit</button>
                <button>delete</button>
            </td>
        </tr>
    );
}