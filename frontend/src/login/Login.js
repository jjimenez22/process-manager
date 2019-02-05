import LoginForm from "./LoginForm";
import React, {Component} from "react";
import {BASE_URI, restGet, restPostNoBody} from "../commons/RestUtils";

export default class Login extends Component {

    onLogin = (e) => {
        e.preventDefault();
        let url = BASE_URI + "/login?username=" +
            this.state.username + "&password=" +
            this.state.password;
        console.log("URL: ", url);
        restPostNoBody(url, res => {
            restGet(BASE_URI + "/api/users", res => {
                console.log(res);
            })
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