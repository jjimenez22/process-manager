import React from "react";

export function RegisterForm(props) {
    return (
        <form>
            <input type="text" placeholder="Username"/>
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
            <input type="password" placeholder="Password"/>
            <input type="password" placeholder="Repeat password"/>
            <input type="dropdown"/>
        </form>
    );
}