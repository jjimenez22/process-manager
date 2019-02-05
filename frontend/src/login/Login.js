import LoginForm from "./LoginForm";
import React, {Component} from "react";
import {BASE_PATH, BASE_URI, restGet, restPostNoBody} from "../commons/RestUtils";
import {DICTUM, PROCESS, USER} from "../commons/routes";

export default class Login extends Component {

    onLogin = (e) => {
        e.preventDefault();

        const history = this.props.history;
        const username = this.state.username;
        let url = BASE_URI + "/login?username=" +
            username + "&password=" +
            this.state.password;
        restPostNoBody(url, unused => {
            restGet(BASE_PATH + "/users/search/findByUsername?username=" + username,
                obj => {
                    const state = {
                        currentUser: obj,
                        loggedIn: true
                    };
                    switch (obj.role) {
                        case 'ADMIN':
                            history.push({pathname: USER, state: state});
                            break;
                        case 'MANAGER':
                            history.push({pathname: PROCESS, state: state});
                            break;
                        case 'END_USER':
                            history.push({pathname: DICTUM, state: state});
                            break;
                        default:
                            console.error("Check this switch, some data is inconsistent");
                    }
                });
        }, () => {
            alert("Authentication failed")
        })
    };

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };

        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    onChangeUser(e) {
        this.setState({username: e.target.value});
    }

    onChangePassword(e) {
        this.setState({password: e.target.value});
    }

    render() {
        return (
            <LoginForm
                onClick={this.onLogin}
                onChangeUser={this.onChangeUser}
                valueUser={this.state.username}
                onChangePass={this.onChangePassword}
                valuePass={this.state.password}
            />
        );
    }
}