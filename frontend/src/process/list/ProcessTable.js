import React, {Component} from "react";
import ProcessRow from "./ProcessRow";
import {BASE_PATH, restDelete, restGet} from "../../util/RestUtils";

export default class ProcessTable extends Component {

    getProcessByHref = href => this.state.processes.find(
        p => p._links.self.href === href
    );

    constructor(props) {
        super(props);
        this.state = {
            processes: null,
        }
    }

    fetchProcesses() {
        restGet(BASE_PATH + "/processes", obj => {
            this.setState({
                processes: obj._embedded.processes
            })
        });
    }

    deleteProcess(process) {
        restDelete(process._links.self.href, this.fetchProcesses);
    }

    componentDidMount() {
        this.fetchProcesses();
    }

    render() {
        const rows = [];
        if (this.state.processes) {
            this.state.processes.forEach((process) => {
                    rows.push(
                        <ProcessRow
                            process={process}
                            key={process._links.self.href}
                        />
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