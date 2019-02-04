import React, {Component} from 'react';
import './App.css';
import {Route} from "react-router";
import UserRegistration from "./user/form/UserRegistration";
import UserEdit from "./user/form/UserEdit";
import ProcessCreate from "./process/form/ProcessCreate";
import {
    DICTUM,
    DICTUM_CREATE,
    DICTUM_EDIT,
    PROCESS,
    PROCESS_CREATE,
    PROCESS_EDIT,
    USER,
    USER_EDIT,
    USER_REGISTER
} from "./commons/routes";
import ProcessEdit from "./process/form/ProcessEdit";
import DictumCreate from "./dictum/form/DictumCreate";
import DictumEdit from "./dictum/form/DictumEdit";
import FilterableDictumTable from "./dictum/list/FilterableDictumTable";
import {Login} from "./login/Login";
import FilterableUserTable from "./user/list/FilterableUserTable";
import FilterableProcessTable from "./process/list/FilterableProcessTable";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/" component={Login}/>

                <Route exact path={USER} component={FilterableUserTable}/>
                <Route exact path={USER_REGISTER} component={UserRegistration}/>
                <Route exact path={USER_EDIT} component={UserEdit}/>

                <Route exact path={PROCESS} component={FilterableProcessTable}/>
                <Route exact path={PROCESS_CREATE} component={ProcessCreate}/>
                <Route exact path={PROCESS_EDIT} component={ProcessEdit}/>

                <Route exact path={DICTUM} component={FilterableDictumTable}/>
                <Route exact path={DICTUM_CREATE} component={DictumCreate}/>
                <Route exact path={DICTUM_EDIT} component={DictumEdit}/>
            </div>
        );
    }
}

export default App;
