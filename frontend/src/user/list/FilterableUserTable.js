import React, {Component} from 'react';
import UserTable from "./UserTable";
import {BASE_PATH, restDelete, restGet} from "../../commons/RestUtils";
import {Link} from "react-router-dom";

export default class FilterableUserTable extends Component {

    constructor(props) {
        super(props);
        this.state = {users: null};

        this.isEdit = true;
        if (typeof props.isEdit !== 'undefined') {
            this.isEdit = props.idEdit;
        }

        this.fetchUsers = this.fetchUsers.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

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
        const register = (
            <Link to="/register">
                <button>Register</button>
            </Link>
        );
        return (
            <div>
                {this.isEdit ? register : null}
                <br/>
                <UserTable
                    users={this.state.users}
                    isEdit={this.state.isEdit}
                    onDelete={this.deleteUser}
                    isChecked={this.props.isChecked}
                    selected={this.props.selected}
                    onCheck={this.props.onCheck}
                />
            </div>
        );
    }
}