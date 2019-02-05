import React, {Component} from "react";
import ProcessTable from "../../process/list/ProcessTable";
import {restGet} from "../../commons/RestUtils";

export default class DictumProcessTable extends Component {

    constructor(props) {
        super(props);
        this.state = {processes: null};
        this.href = /*this.props.location.state.user._links.self.href*/"http://localhost:8080/api/users/1";

        this.fetchProcesses = this.fetchProcesses.bind(this);
    }

    fetchProcesses() {
        restGet(this.href + "/processes", obj => {
            this.setState({
                processes: obj._embedded.processes
            })
        });
    }

    componentDidMount() {
        this.fetchProcesses();
    }

    render() {
        return (
            <div>
                <ProcessTable
                    processes={this.state.processes}
                    isDictum={true}
                    userHref={this.href}
                />
            </div>
        );
    }
}