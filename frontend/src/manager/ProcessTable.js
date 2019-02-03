import React, {Component} from "react";
import ProcessRow from "./ProcessRow";

export default class ProcessTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            response: null,
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/processes")
            .then(res => res.json())
            .then(obj => {
                this.setState({
                    users: obj
                })
            })
            .catch(e => {
                console.error('Failed fetching data:', e);
            });
    }

    render() {
        const rows = [];
        if (this.state.response) {
            this.state.response._embedded.processes
                .forEach((process) => {
                    rows.push(
                        <ProcessRow
                            process={process}
                            key={process._links.self.href}/>
                    );
                });
        }
        return (
            <table>
                <thead>
                <th>Name</th>
                <th>Description</th>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}