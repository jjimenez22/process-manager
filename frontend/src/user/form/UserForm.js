import React from "react";
import RoleSelect from "./RoleSelect";
import {Link} from "react-router-dom";

export default function UserForm(props) {
    const user = props.process ? props.process : {};
    return (
        <form>
            <label>
                Username:
                <input type="text"
                       value={user.username}
                       onChange={props.onUsernameChange}
                />
            </label>
            <label>
                First name:
                <input type="text"
                       value={user.firstName}
                       onChange={props.onFirstNameChange}
                />
            </label>
            <label>
                Last name:
                <input type="text"
                       value={user.lastName}
                       onChange={props.onLastNameChange}
                />
            </label>
            <label>
                Password:
                <input type="password"
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
