import React, {Component} from "react";
import ProcessTable from "../../process/list/ProcessTable";
import {restGet} from "../../commons/RestUtils";
import PageTitle from "../../commons/PageTitle"

export default class DictumProcessTable extends Component {

    constructor(props) {
        super(props);
        this.state = {processes: null};
        this.currentUser = this.props.location.state.currentUser;
        this.href = this.currentUser._links.self.href;

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
                <PageTitle title="Your asigment processes"/>
                <ProcessTable
                    processes={this.state.processes}
                    isDictum={true}
                    userHref={this.href}
                    currentUser={this.currentUser}
                />
            </div>
        );
    }
}