import {LoginForm} from "./LoginForm";
import React from "react";

export function Login(props) {
    return (
        <div>
            <LoginForm/>
            <br/>
            <button>
                Login
            </button>
        </div>
    );
}