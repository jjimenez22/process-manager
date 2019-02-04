import React from "react";
import UserRow from "./UserRow";

export default function UserTable(props) {
    const rows = [];
    if (props.users) {
        props.users.forEach((user) => {
            let href = user._links.self.href;
            rows.push(
                <UserRow
                    user={user}
                    key={href}
                    id={href}
                    isEdit={props.isEdit}
                    onDelete={props.onDelete}
                    isChecked={props.selected.find(link => {
                        return link === href;
                    }) != null}

                    onCheck={props.onCheck}
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