import React from "react";
import {BASE_PATH, restPost, restPutUris} from "../../commons/RestUtils";
import ProcessForm from "./ProcessForm";
import {PROCESS} from "../../commons/routes";

export default class ProcessCreate extends React.Component {

    handleClick = (e) => {
        const body = {
            name: this.state.name,
            description: this.state.description,
        };
        const history = this.props.history;
        const container = this.state.container;
        restPost(BASE_PATH + '/processes', body, res => {
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
            name: "",
            description: "",
            container: []
        };
    }

    render() {
        return (
            <ProcessForm
                titleName="Add a new process"
                onNameChange={e => {
                    this.setState({
                        name: e.target.value
                    })
                }}
                onDescriptionChange={e => {
                    this.setState({
                        description: e.target.value
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
