import React, {Component} from "react";
import {restPut} from "../../util/RestUtils";
import UserForm from "./UserForm";

export default class UserEdit extends Component {

    handleClick = (e) => {
        const body = this.state.user;
        const history = this.props.history;
        restPut(body._links.self.href, body, res => {
            console.log("Successfully saved user: ", res);
            history.push({pathname: '/'});
        });
        e.preventDefault();
    };

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.location.state.user
        };

    }

    render() {
        const user = this.state.user;
        return (
            <UserForm
                user={user}
                onUsernameChange={e => {
                    user.username = e.target.value;
                    this.setState({
                        user: user
                    })
                }}
                onFirstNameChange={e => {
                    user.firstName = e.target.value;
                    this.setState({
                        user: user
                    })
                }}
                onLastNameChange={e => {
                    user.lastName = e.target.value;
                    this.setState({
                        user: user
                    })
                }}
                onPasswordChange={e => {
                    user.password = e.target.value;
                    this.setState({
                        user: user
                    })
                }}
                onRoleChange={e => {
                    user.role = e.target.value;
                    this.setState({
                        user: user
                    })
                }}
                onAccept={this.handleClick}
                onCancelPath={'/'}
            />
        );
    }
}