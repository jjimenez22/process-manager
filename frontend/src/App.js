import React, {Component} from 'react';
import './App.css';
import RegisterForm from "./admin/RegisterForm";

class App extends Component {
    render() {
        return (
            <div className="App">
                <RegisterForm/>
            </div>
        );
    }
}

export default App;