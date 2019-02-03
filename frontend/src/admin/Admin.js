import React from 'react';
import {UserTable} from "./UserTable";

export default function Admin(props) {
    return (
        <div>
            <button>Register</button>
            <br/>
            <UserTable/>
        </div>
    )
}