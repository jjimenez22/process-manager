import React, {Component} from 'react';
import './App.css';
import {Route} from "react-router";
import UserRegistration from "./user/form/UserRegistration";
import UserEdit from "./user/form/UserEdit";
import FilterableProcessTable from "./process/FilterableProcessTable";
import ProcessCreate from "./process/form/ProcessCreate";
import {PROCESS_CREATE, PROCESS_EDIT, USER_EDIT, USER_REGISTER} from "./commons/routes";
import ProcessEdit from "./process/form/ProcessEdit";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/" component={FilterableProcessTable}/>
                <Route exact path={USER_REGISTER} component={UserRegistration}/>
                <Route exact path={USER_EDIT} component={UserEdit}/>
                <Route exact path={PROCESS_CREATE} component={ProcessCreate}/>
                <Route exact path={PROCESS_EDIT} component={ProcessEdit}/>
            </div>
        );
    }
}

export default App;
