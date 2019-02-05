import React, {Component} from "react";
import UserRow from "./UserRow";
import Table from "../../commons/Table"
import "./listStyle.css"

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
        const headerTable = ["Username", "First Name", "Last Name", "Type", "Action"];
        return (
            <Table header={headerTable}>
                {
                    this.props.users &&
                    this.props.users.map(user => (
                        <UserRow
                            user={user}
                            key={user._links.self.href}
                            id={user._links.self.href}
                            isEdit={this.props.isEdit}
                            onDelete={this.props.onDelete}
                            isChecked={this.isUserChecked(user._links.self.href)}
                            onCheck={this.props.onCheck}
                        />
                    ))
                }
            </Table>
        );
    }
}