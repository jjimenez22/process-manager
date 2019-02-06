import React from "react";
import "../user/list/listStyle.css"
import Logout from "../login/Logout";

export default function PageTitle(props) {
    return (
        <div className="card-header card-title d-flex justify-content-between">
            {props.title}
            <Logout/>
        </div>
    )
}