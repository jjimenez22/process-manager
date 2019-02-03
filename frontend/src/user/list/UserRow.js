import React from "react";

export default function UserRow(props) {
    const editButtons = (
        <div>
            <button onClick={props.onEdit}>edit</button>
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