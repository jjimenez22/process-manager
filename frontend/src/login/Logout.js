import {Link} from "react-router-dom";
import React from "react";

export default function Logout(props) {
    return (
        <Link to="/">
            <button>Log out</button>
        </Link>
    );
}