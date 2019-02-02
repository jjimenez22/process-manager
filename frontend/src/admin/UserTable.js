import React from "react";
import {UserRow} from "./UserRow";

export function UserTable(props) {
    return (
        <table>
            <thead>
            <tr>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Type</th>
                <th></th>
            </tr>
            </thead>
            <tbody><UserRow/></tbody>
        </table>
    );
}