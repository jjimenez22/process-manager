import React, {Component} from 'react';
import UserTable from "./UserTable";
import {BASE_PATH, restDelete, restGet} from "../../commons/RestUtils";
import {Link} from "react-router-dom";
import {USER_REGISTER} from "../../commons/routes";
import UniversalButton from "../../commons/UniversalButton";
import PageTitle from "../../commons/PageTitle"


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
        return (
            <div id="user-list">
                {/*Component fot the table title*/}
                <PageTitle title="User list"/>

                <div className="card">
                    {/*Button to add a new user*/}
                    {
                        this.isEdit &&
                        <Link to={USER_REGISTER} className="d-flex justify-content-end">
                            <UniversalButton name="Add a new user" class="btn-list"/>
                        </Link>
                    }

                    {/*The table that list the users*/}
                <UserTable
                    users={this.state.users}
                    isEdit={this.isEdit}
                    onDelete={this.deleteUser}
                    isChecked={this.props.isChecked}
                    selected={this.props.selected}
                    onCheck={this.props.onCheck}
                />
                </div>
            </div>
        );
    }
}