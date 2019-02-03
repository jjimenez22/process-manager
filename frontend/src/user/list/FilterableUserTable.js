import React, {Component} from 'react';
import UserTable from "./UserTable";
import {BASE_PATH, restDelete, restGet} from "../../util/RestUtils";
import {Link} from "react-router-dom";

export default class FilterableUserTable extends Component {

    constructor(props) {
        super(props);
        this.state = {users: null};

        this.fetchUsers = this.fetchUsers.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
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

    deleteUser(href) {
        restDelete(href, this.fetchUsers);
    }

    componentDidMount() {
        this.fetchUsers();
    }

    render() {
        return (
            <div>
                <Link to="/register">
                    <button>Register</button>
                </Link>
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