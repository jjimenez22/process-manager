import React from "react";
import {Link} from "react-router-dom";

export default function UserRow(props) {
    const editButtons = (
        <div>
            <Link to={{
                pathname: '/user/edit', state: {
                    user: props.user
                }
            }}>
                <button>edit</button>
            </Link>
            <button onClick={() => {
                props.onDelete(props.id)
            }}>delete
            </button>
        </div>
    );
    const check = (
        <input
            type="checkbox"
            checked={props.isChecked}
            onChange={props.onChange}
        />
    );
    return (
        <tr>
            <td>{props.user.username}</td>
            <td>{props.user.firstName}</td>
            <td>{props.user.lastName}</td>
            <td>{props.user.role}</td>
            <td>{props.isEdit ? editButtons : check}</td>
        </tr>
    );
}