import React, {Component} from 'react';

export default class ProcessForm extends Component {
    handleClick = (e) => {
        const body = {
            name: this.state.name,
            description: this.state.description,
        };
        fetch('http://localhost:8080/api/processes', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => console.log("Successfully saved process: ", res))
            .catch(e => console.error("Error: ", e));
        e.preventDefault();
    };

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: ""
        };
    }

    render() {
        return (
            <form>
                <label>
                    Name:
                    <input type="text" value={this.state.name}
                           onChange={event => {
                               this.setState({name: event.target.value})
                           }}
                    />
                </label>
                <label>
                    Description:
                    <textarea value={this.state.description}
                              onChange={event => {
                                  this.setState({description: event.target.value})
                              }}
                    />
                </label>
                <button onClick={this.handleClick}>Accept</button>
                <button>Cancel</button>
            </form>
        )
    }
}