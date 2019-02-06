import {Link} from "react-router-dom";
import {BASE_URI, restPostNoBody} from "../commons/RestUtils"
import React from "react";
import UniversalButton from "../commons/UniversalButton";

export default function Logout(props) {
    return (
        <Link to="/">
            <UniversalButton onClick={() => {
                restPostNoBody(BASE_URI + "/logout");
            }}
                             name="Log Out"
            />
        </Link>
    );
}