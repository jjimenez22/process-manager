import React, {Component} from "react";
import UserRow from "./UserRow";

export default class UserTable extends Component {

    isUserChecked(href) {
        if (this.props.isEdit)
            return null;

        let found = this.props.selected.find(link => {
            return link === href;
        });
        return found != null;
    }

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
                        isChecked={this.isUserChecked(href)}
                        onCheck={this.props.onCheck}
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