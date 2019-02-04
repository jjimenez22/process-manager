import React, {Component} from "react";
import EditDeleteButtons from "../../commons/EditDeleteButtons";
import {USER_EDIT} from "../../commons/routes";

export default class UserRow extends Component {

    isChecked = () => {
        return this.props.isChecked(this.href);
    };
    handleChange = (e) => {
        this.props.onCheck(e, this.href);
    };

    constructor(props) {
        super(props);
        this.href = props.user._links.self.href;
    }

    render() {
        const editButtons = (
            <EditDeleteButtons
                editPath={USER_EDIT}
                editState={{user: this.props.user}}
                onDelete={() => {
                    this.props.onDelete(this.props.id)
                }}
            />
        );
        const check = (
            <input
                type="checkbox"
                checked={this.props.isChecked}
                onChange={this.handleChange}
            />
        );
        return (
            <tr>
                <td>{this.props.user.username}</td>
                <td>{this.props.user.firstName}</td>
                <td>{this.props.user.lastName}</td>
                <td>{this.props.user.role}</td>
                <td>{this.props.isEdit ? editButtons : check}</td>
            </tr>
        );
    }
}