import React from 'react';
import {Link} from "react-router-dom";

export default function DictumForm(props) {

    const dictum = props.dictum ? props.dictum : {};

    return (
        <form>
            <label>
                Title:
                <input type="text" value={dictum.title}
                       onChange={props.onTitleChange}
                />
            </label>
            <label>
                Description:
                <textarea value={dictum.description}
                          onChange={props.onDescriptionChange}
                />
            </label>
            <button onClick={props.onAccept}>Accept</button>
            <Link to={props.onCancelPath}>
                <button>Cancel</button>
            </Link>
        </form>
    )
}