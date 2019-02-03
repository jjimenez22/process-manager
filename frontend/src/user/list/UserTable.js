import React, {Component} from "react";
import UserRow from "./UserRow";

export default class UserTable extends Component {
    render() {
        const rows = [];
        if (this.props.users) {
            this.props.users.forEach((user) => {
                let href = user._links.self.href;
                rows.push(
                    <UserRow
                        user={user}
                        key={href}
                        id={href}
                        isEdit={this.props.isEdit}
                        onDelete={this.props.onDelete}
                        isChecked={this.props.isChecked}
                        onChange={this.props.onChange}
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
}