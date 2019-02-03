import React from "react";
import UserRow from "./UserRow";

export default function UserTable(props) {
    const rows = [];
    if (props.users) {
        props.users.forEach((user) => {
            rows.push(
                <UserRow
                    user={user}
                    key={user._links.self.href}
                    isEdit={props.isEdit}
                    onEdit={props.onEdit}
                    onDelete={props.onDelete}
                    isChecked={props.isChecked}
                    onChange={props.onChange}
                />
            );
        });
    }
    return (
        <table>
            <thead>
            <tr>
                <th>Username</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Type</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}