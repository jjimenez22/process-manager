import React, {Component} from 'react';
import './App.css';
import {UserTable} from "./admin/UserTable";

class App extends Component {
    render() {
        return (
            <div className="App">
                <UserTable/>
            </div>
        );
    }
}

export default App;
