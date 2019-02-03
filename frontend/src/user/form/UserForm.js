import React from "react";
import RoleSelect from "./RoleSelect";
import {Link} from "react-router-dom";

export default function UserForm(props) {
    const user = props.user ? props.user : {};
    return (
        <form>
            <label>
                Username:
                <input type="text" placeholder="Username"
                       value={user.username}
                       onChange={props.onUsernameChange}
                />
            </label>
            <label>
                First name:
                <input type="text" placeholder="First Name"
                       value={user.firstName}
                       onChange={props.onFirstNameChange}
                />
            </label>
            <label>
                Last name:
                <input type="text" placeholder="Last Name"
                       value={user.lastName}
                       onChange={props.onLastNameChange}
                />
            </label>
            <label>
                Password:
                <input type="password" placeholder="Password"
                       value={user.password}
                       onChange={props.onPasswordChange}
                />
            </label>
            <label>
                Role:
                <RoleSelect
                    value={user.role}
                    onChange={props.onRoleChange}
                />
            </label>
            <button onClick={props.onAccept}>Accept</button>
            <Link to={props.onCancelPath}>
                <button>Cancel</button>
            </Link>
        </form>
    );
}
