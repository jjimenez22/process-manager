import React from "react";
import UniversalButton from "../commons/UniversalButton"
import InputForm from "../user/form/InputLabel";
import Card from "./Card"
import "./userStyles.css"


export default function LoginForm(props) {
    const data = [
        {
            name: "Username",
            type: "text",
            value: props.valueUser,
            onChange: props.onChangeUser,
            icon: true,
            iconClass: "fas fa-user"
        },
        {
            name: "Password",
            type: "password",
            value: props.valuePass,
            onChange: props.onChangePass,
            icon: true,
            iconClass: "fas fa-key"
        }
    ];


    return (
        <Card title="Sing in">
            <form>
                {
                    data.map((elem, index) => (
                        <InputForm
                            key={index}
                            name={elem.name}
                            type={elem.type}
                            value={elem.value}
                            onChange={elem.onChange}
                            icon={elem.icon}
                            iconClass={elem.iconClass}
                        />
                    ))
                }
                <div className="form-group bt_login_container">
                    <UniversalButton name="Login" class="float-right login_btn" onClick={props.onClick}/>
                </div>
            </form>


        </Card>
    );
}