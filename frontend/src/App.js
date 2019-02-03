import React, {Component} from 'react';
import './App.css';
import ProcessTable from "./manager/ProcessTable";

class App extends Component {
    render() {
        return (
            <div className="App">
                <ProcessTable/>
            </div>
        );
    }
}

export default App;
