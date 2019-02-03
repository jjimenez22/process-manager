import React from "react";
import UserForm from "./UserForm";

export default class UserRegistration extends React.Component {

    handleClick = (e) => {
        const body = {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            role: this.state.role,
            password: this.state.password
        };
        fetch('http://localhost:8080/api/admin', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => console.log("Successfully saved user: ", res))
            .catch(e => console.error("Error: ", e));
        e.preventDefault();
    };

    constructor(props) {
        super(props);
        this.state = {
            role: "END_USER",
            username: '',
            firstName: '',
            lastName: '',
            password: '',
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
            />
        );
    }
}