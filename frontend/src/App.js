import React, {Component} from 'react';
import './App.css';
import {Route} from "react-router";
import FilterableUserTable from "./user/list/FilterableUserTable";
import UserRegistration from "./user/form/UserRegistration";
import UserEdit from "./user/form/UserEdit";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/" component={FilterableUserTable}/>
                <Route exact path="/register" component={UserRegistration}/>
                <Route exact path="/user/edit" component={UserEdit}/>
            </div>
        );
    }
}

export default App;
