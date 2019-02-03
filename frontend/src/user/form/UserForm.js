import React from "react";
import RoleSelect from "./RoleSelect";

export default function UserForm(props) {
    return (
        <form>
            <label>
                Username:
                <input type="text" placeholder="Username"
                       value={props.username}
                       onChange={props.onUsernameChange}
                />
            </label>
            <label>
                First name:
                <input type="text" placeholder="First Name"
                       value={props.firstName}
                       onChange={props.onFirstNameChange}
                />
            </label>
            <label>
                Last name:
                <input type="text" placeholder="Last Name"
                       value={props.lastName}
                       onChange={props.onLastNameChange}
                />
            </label>
            <label>
                Password:
                <input type="password" placeholder="Password"
                       value={props.password}
                       onChange={props.onPasswordChange}
                />
            </label>
            <label>
                Role:
                <RoleSelect
                    value={props.role}
                    onChange={props.onRoleChange}
                />
            </label>
            <button onClick={props.onAccept}>Accept</button>
            <button>Cancel</button>
        </form>
    );
}
