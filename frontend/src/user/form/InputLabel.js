import React from "react";
import RoleSelect from "./RoleSelect";

export default function InputForm(props) {
    return (
        <div className="input-group form-group">
            <div className="input-group-prepend">
                {
                    props.icon ?
                        <span className="input-group-text"><i className={props.iconClass}></i></span>
                        : <label className="input-group-text label-singup" htmlFor={props.id}>{props.name}</label>
                }
            </div>
            {
                props.select ?
                    <RoleSelect
                        value={props.value}
                        onChange={props.onChange}
                        id={props.id}
                    />
                    : <input type={props.type}
                             className="form-control"
                             id={props.id}
                             value={props.value}
                             onChange={props.onChange}
                             placeholder={props.icon ? props.name : ""}
                    />
            }
        </div>
    )
}