import React, {Component} from 'react';
import './App.css';
import {Route} from "react-router";
import FilterableUserTable from "./user/list/FilterableUserTable";
import UserRegistration from "./user/form/UserRegistration";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/" component={FilterableUserTable}/>
                <Route exact path="/register" component={UserRegistration}/>
            </div>
        );
    }
}

export default App;
