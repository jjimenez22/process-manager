import React from "react";
import UserForm from "./UserForm";
import {BASE_PATH, restPost} from "../../commons/RestUtils";
import {USER} from "../../commons/routes";

export default class UserRegistration extends React.Component {

    handleClick = (e) => {
        const body = {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            role: this.state.role,
            password: this.state.password
        };
        const history = this.props.history;
        restPost(BASE_PATH + '/admin', body, res => {
            console.log("Successfully saved user: ", res);
            history.push({pathname: USER});
        }, errroMessage => {
            alert(errroMessage)
        });
        e.preventDefault();
    };

    constructor(props) {
        super(props);
        this.state = {
            role: "ADMIN",
            username: '',
            firstName: '',
            lastName: '',
            password: ''
        };
    }

    render() {
        return (
            <UserForm
                onUsernameChange={e => {
                    this.setState({
                        username: e.target.value
                    })
                }}
                onFirstNameChange={e => {
                    this.setState({
                        firstName: e.target.value
                    })
                }}
                onLastNameChange={e => {
                    this.setState({
                        lastName: e.target.value
                    })
                }}
                onPasswordChange={e => {
                    this.setState({
                        password: e.target.value
                    })
                }}
                onRoleChange={e => {
                    this.setState({
                        role: e.target.value,
                    });
                }}
                onAccept={this.handleClick}
                onCancelPath={USER}
            />
        );
    }
}