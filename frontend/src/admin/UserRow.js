import React from "react";

export function UserRow(props) {
    return (
        <tr>
            <td>username</td>
            <td>name</td>
            <td>lastname</td>
            <td>type</td>
            <td>
                <button>edit</button>
            </td>
        </tr>
    );
}