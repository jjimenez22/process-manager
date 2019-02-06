import React, {Component} from "react";
import {restPut} from "../../commons/RestUtils";
import DictumForm from "./DictumForm";
import {DICTUM} from "../../commons/routes";

export default class DictumEdit extends Component {

    handleClick = (e) => {
        const body = this.state.dictum;
        const redirect = this.props.redirect;
        restPut(body._links.self.href, body, res => {
            console.log("Successfully saved dictum: ", res);
            redirect();
        });
        e.preventDefault();
    };

    constructor(props) {
        super(props);
        this.currentUser = props.currentUser;
        this.state = {
            dictum: this.props.dictum,
        };
    }

    render() {
        const dictum = this.state.dictum;
        return (
            <DictumForm
                dictum={dictum}
                onTitleChange={e => {
                    dictum.title = e.target.value;
                    this.setState({
                        dictum: dictum
                    })
                }}
                onContentChange={e => {
                    dictum.content = e.target.value;
                    this.setState({
                        dictum: dictum
                    })
                }}
                onAccept={this.handleClick}
                onCancelPath={DICTUM}
                currentUser={this.currentUser}
            />
        );
    }
}