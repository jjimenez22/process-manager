import React from 'react';
import {Link} from "react-router-dom";
import FilterableUserTable from "../../user/list/FilterableUserTable";
import PageTitle from "../../commons/PageTitle";
import "./processStyle.css"
import InputForm from "../../user/form/InputLabel"
import UniversalButton from "../../commons/UniversalButton"

export default function ProcessForm(props) {

    const process = props.process ? props.process : {};

    return (
        <div className="process-edit">
            <PageTitle title={props.titleName}/>
            <form>
                <div className="input-process">
                    <InputForm
                        name="Name"
                        id="nameId"
                        type="text"
                        value={process.name}
                        onChange={props.onNameChange}
                    />

                    <InputForm
                        name="Description"
                        id="descriptionId"
                        textarea={true}
                        value={process.description}
                        onChange={props.onDescriptionChange}
                    />
                </div>
                <FilterableUserTable
                    isEdit={false}
                    isChecked={props.isChecked}
                    selected={props.selected}
                    onCheck={props.onCheck}
                    isProcess={true}
                />
                <div className="margin-buttons">
                    <UniversalButton onClick={props.onAccept} name="Accept" class="btn-acept"/>
                    <Link to={props.onCancelPath}>
                        <UniversalButton name="Cancel" class="btn-cancel"/>
                    </Link>
                </div>
            </form>
        </div>
    )
}