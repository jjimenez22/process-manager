import LoginForm from "./LoginForm";
import React, {Component} from "react";

export default class Login extends Component {

    onLogin = (e) => {
        e.preventDefault();
        alert("Hice click")
    };

    render() {
        return (
            <LoginForm onClick={this.onLogin}/>
        );
    }
}