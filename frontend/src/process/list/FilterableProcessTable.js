import React, {Component} from "react";
import ProcessTable from "./ProcessTable";
import {BASE_PATH, restDelete, restGet} from "../../commons/RestUtils";
import {Link} from "react-router-dom";

export default class FilterableProcessTable extends Component {

    getProcessByHref = href => this.state.processes.find(
        p => p._links.self.href === href
    );

    constructor(props) {
        super(props);
        this.state = {processes: null};

        this.fetchProcesses = this.fetchProcesses.bind(this);
        this.deleteProcess = this.deleteProcess.bind(this);
    }

    fetchProcesses() {
        restGet(BASE_PATH + "/processes", obj => {
            this.setState({
                processes: obj._embedded.processes
            })
        });
    }

    deleteProcess(href) {
        restDelete(href, this.fetchProcesses);
    }

    componentDidMount() {
        this.fetchProcesses();
    }

    render() {
        return (
            <div>
                <Link to="/process/create">
                    <button>Create New</button>
                </Link>
                <br/>
                <ProcessTable
                    processes={this.state.processes}
                    onDelete={this.deleteProcess}
                />
            </div>
        );
    }
}