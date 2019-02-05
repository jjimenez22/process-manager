import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import InputForm from "./InputLabel"
import UniversalButton from "../../commons/UniversalButton"
import Card from "../../login/Card"
import PageTitle from "../../commons/PageTitle"

export default function UserForm(props) {
    const user = props.user ? props.user : {};
    const data = [
        {name: "Username", id: "usernameid", type: "text", value: user.username, onChange: props.onUsernameChange},
        {name: "First name", id: "firstnameid", type: "text", value: user.firstName, onChange: props.onFirstNameChange},
        {name: "Last name", id: "lastnameid", type: "text", value: user.lastName, onChange: props.onLastNameChange},
        {name: "Password", id: "passwordid", type: "password", value: user.password, onChange: props.onPasswordChange},
        {name: "Role", id: "roleid", value: user.role, onChange: props.onRoleChange, select: true}
    ]

    return (
        <Fragment>
            <PageTitle title="New User Registration"/>
            <Card title="New User Registration" class="registerUser">
                <form>
                    {
                        data.map((elem, index) => (
                            <InputForm
                                key={index}
                                name={elem.name}
                                id={elem.id}
                                type={elem.type}
                                value={elem.value}
                                onChange={elem.onChange}
                                select={elem.select}
                            />
                        ))
                    }
                    <div style={{marginTop: "35px"}}>
                        <UniversalButton onClick={props.onAccept} name="Accept" class="btn-acept"/>
                        <Link to={props.onCancelPath}>
                            <UniversalButton name="Cancel" class="btn-cancel"/>
                        </Link>
                    </div>
                </form>
            </Card>
        </Fragment>
    );
}
