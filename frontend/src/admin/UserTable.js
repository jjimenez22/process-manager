import React, {Component} from "react";
import {UserRow} from "./UserRow";

export default class UserTable extends Component {

    constructor(props) {
        super(props);
        this.state = {response: null}
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/users")
            .then(res => res.json())
            .then(obj => {
                this.setState({
                    response: obj
                })
            })
            .catch(e => {
                console.error('Failed fetching data:', e);
            });
    }

    render() {
        const rows = [];
        if (this.state.response) {
            this.state.response._embedded.users
                .forEach((user) => {
                    rows.push(
                        <UserRow
                            user={user}
                            key={user._links.self.href}/>
                    );
                });
        }
        return (
            <table>
                <thead>
                <tr>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Type</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}