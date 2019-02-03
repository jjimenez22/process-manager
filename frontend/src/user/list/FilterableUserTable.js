import React, {Component} from 'react';
import UserTable from "./UserTable";

export default class FilterableUserTable extends Component {

    getUserByHref = href => this.state.users.find(
        u => u._links.self.href === href
    );

    constructor(props) {
        super(props);
        this.state = {users: null};
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/users")
            .then(res => res.json())
            .then(obj => {
                this.setState({
                    users: obj._embedded.users
                })
            })
            .catch(e => {
                console.error('Failed fetching data:', e);
            });
    }

    render() {
        return (
            <div>
                <button>Register</button>
                <br/>
                <UserTable
                    users={this.state.users}
                    isEdit={true}
                />
            </div>
        );
    }
}