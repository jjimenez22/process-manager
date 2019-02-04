import React, {Component} from "react";
import {restGet, restPut, restPutUris} from "../../commons/RestUtils";
import ProcessForm from "./ProcessForm";
import {PROCESS} from "../../commons/routes";

export default class ProcessEdit extends Component {

    handleClick = (e) => {
        const body = this.state.process;
        const history = this.props.history;
        const container = this.state.container;
        restPut(body._links.self.href, body, res => {
            console.log("Successfully saved process: ", res);
            restPutUris(res._links.users.href, container, put => {
                console.log("Successfully saved users into process: ", put);
                history.push({pathname: PROCESS});
            });
        });
        e.preventDefault();
    };
    removeUser = (href) => {
        let container = this.state.container.slice();
        let index = container.indexOf(href);
        container.splice(index, 1);
        this.setState({container: container});
    };
    addUser = (href) => {
        let container = this.state.container.slice();
        container.push(href);
        this.setState({container: container});
    };
    handleCheck = (e, href) => {
        e.target.checked ?
            this.addUser(href) :
            this.removeUser(href);
    };
    isChecked = (href) => {
        return this.state.container.find(user => {
            return user._links.self.href === href;
        }) != null
    };

    constructor(props) {
        super(props);
        this.state = {
            process: this.props.location.state.process,
            container: []
        };
    }

    componentWillMount() {
        let url = this.state.process._links.users.href;
        restGet(url, obj => {
            this.setState({
                container: this.getLinks(obj._embedded.users)
            })
        });
    }

    getLinks(users) {
        let links = [];
        users.forEach(user => links.push(user._links.self.href));
        return links;
    }

    render() {
        const process = this.state.process;
        return (
            <ProcessForm
                process={process}
                onNameChange={e => {
                    process.name = e.target.value;
                    this.setState({
                        process: process
                    })
                }}
                onDescriptionChange={e => {
                    process.description = e.target.value;
                    this.setState({
                        process: process
                    })
                }}
                isChecked={this.isChecked}
                selected={this.state.container}
                onCheck={this.handleCheck}
                onAccept={this.handleClick}
                onCancelPath={PROCESS}
            />
        );
    }
}