import React from "react";
import {Link} from "react-router-dom";
import UniversalButton from "./UniversalButton"
import imageNotFound from "../error-page.jpg";
import imagePermission from "../error-page-401.jpg";
import "./ErrorViewStyle.css";

export default function ErrorView(props) {
    return (
        <div className="error-container">
            <div className="image">
                <img src={props.notFound ? imageNotFound : imagePermission}/>
            </div>

            {
                props.notFound
                    ? <p>The page does not exist</p>
                    : <p>Something went wrong or maybe you have no acces</p>
            }
            <Link to="/">
                <UniversalButton name="Go home" class="btn-list"/>
            </Link>
        </div>
    )
}