import React, {Component} from 'react';
import UserTable from "./UserTable";
import {BASE_PATH, restDelete, restGet} from "../../util/RestUtils";

export default class FilterableUserTable extends Component {

    constructor(props) {
        super(props);
        this.state = {users: null};
    }

    getUserByHref = href => this.state.users.find(
        u => u._links.self.href === href
    );

    fetchUsers() {
        restGet(BASE_PATH + "/users", obj => {
            this.setState({
                users: obj._embedded.users
            })
        });
    }

    deleteUser(user) {
        restDelete(user._links.self.href, this.fetchUsers);
    }

    componentDidMount() {
        this.fetchUsers();
    }

    render() {
        return (
            <div>
                <button>Register</button>
                <br/>
                <UserTable
                    users={this.state.users}
                    isEdit={true}
                    onDelete={this.deleteUser}
                />
            </div>
        );
    }//todo onedit con react router
}