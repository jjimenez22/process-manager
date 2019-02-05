import React, {Component} from "react";
import EditDeleteButtons from "../../commons/EditDeleteButtons";
import {USER_EDIT} from "../../commons/routes";
import Row from "../../commons/Row";

export default class UserRow extends Component {

    constructor(props) {
        super(props);
        this.href = props.user._links.self.href;
    }
    isChecked = () => {
        return this.props.isChecked(this.href);
    };
    handleChange = (e) => {
        this.props.onCheck(e, this.href);
    };

    render() {
        const prop = this.props.user;

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

        const row = [prop.username, prop.firstName, prop.lastName, prop.role]
        return (
            <Row rows={row}>
                {this.props.isEdit ? editButtons : check}
            </Row>
        );
    }
}