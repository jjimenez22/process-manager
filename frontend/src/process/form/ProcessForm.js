import React from 'react';
import {Link} from "react-router-dom";
import FilterableUserTable from "../../user/list/FilterableUserTable";

export default function ProcessForm(props) {

    const process = props.process ? props.process : {};

    return (
        <form>
            <label>
                Name:
                <input type="text" value={process.name}
                       onChange={props.onNameChange}
                />
            </label>
            <label>
                Description:
                <textarea value={process.description}
                          onChange={props.onDescriptionChange}
                />
            </label>
            <br/>
            <FilterableUserTable
                isEdit={false}
                isChecked={props.isChecked}
                selected={props.selected}
                onCheck={props.onCheck}
                isProcess={true}
            />
            <br/>
            <button onClick={props.onAccept}>Accept</button>
            <Link to={props.onCancelPath}>
                <button>Cancel</button>
            </Link>
        </form>
    )
}