import React from "react";

export default class RoleSelect extends React.Component {

    handleChange = e => {
        this.props.onChange(e)
    };

    render() {
        return (
            <select
                value={this.props.value}
                onChange={this.handleChange}>
                <option value={"ADMIN"}>Administrator</option>
                <option value={"MANAGER"}>Manager</option>
                <option value={"END_USER"}>End User</option>
            </select>
        );
    }
}