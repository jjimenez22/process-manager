import React, {Component} from "react";
import RoleSelect from "./RoleSelect";

export default class RegisterForm extends Component {
    handleRoleSelectChange = e => {
        this.setState({
            role: e.target.value,
        });
    };
    handleClick = (e) => {
        const body = {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            role: this.state.role,
            password: this.state.password
        };
        fetch('http://localhost:8080/api/admin', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => console.log("Success: ", res))
            .catch(e => console.error("Error: ", e));
        e.preventDefault();
    };

    constructor(props) {
        super(props);
        this.state = {
            role: "END_USER",
            username: '',
            firstName: '',
            lastName: '',
            password: '',
        };
    }

    render() {
        return (
            <form>
                <input type="text" placeholder="Username"
                       value={this.state.username}
                       onChange={e => {
                           this.setState({
                               username: e.target.value
                           })
                       }}
                />
                <input type="text" placeholder="First Name"
                       value={this.state.firstName}
                       onChange={e => {
                           this.setState({
                               firstName: e.target.value
                           })
                       }}
                />
                <input type="text" placeholder="Last Name"
                       value={this.state.lastName}
                       onChange={e => {
                           this.setState({
                               lastName: e.target.value
                           })
                       }}
                />
                <input type="password" placeholder="Password"
                       value={this.state.password}
                       onChange={e => {
                           this.setState({
                               password: e.target.value
                           })
                       }}
                />
                <RoleSelect
                    value={this.state.role}
                    onChange={this.handleRoleSelectChange}
                />
                <button onClick={this.handleClick}>Accept</button>
                <button>Cancel</button>
            </form>
        );
    }
}