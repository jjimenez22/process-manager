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
                Content:
                <textarea value={dictum.content}
                          onChange={props.onContentChange}
                />
            </label>
            <button onClick={props.onAccept}>Accept</button>
            <Link to={{
                pathname: props.onCancelPath,
                state: {currentUser: props.currentUser}
            }}>
                <button>Cancel</button>
            </Link>
        </form>
    )
}