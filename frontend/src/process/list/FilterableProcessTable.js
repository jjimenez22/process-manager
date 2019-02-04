import React, {Component} from "react";
import ProcessTable from "./ProcessTable";
import {BASE_PATH, restDelete, restGet} from "../../commons/RestUtils";
import {Link} from "react-router-dom";
import {PROCESS_CREATE} from "../../commons/routes";

export default class FilterableProcessTable extends Component {

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
                <Link to={PROCESS_CREATE}>
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