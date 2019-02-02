import React from "react";
import {RegisterForm} from "./RegisterForm";

export function Register(props) {
    return (
        <div>
            <RegisterForm/>
            <button>Register</button>
            <button>Cancel</button>
        </div>
    )
}