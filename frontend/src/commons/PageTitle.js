import React from "react";
import "../user/list/listStyle.css"

export default function PageTitle(props) {
    return (
        <div className="card-header card-title">
            {props.title}
        </div>
    )
}