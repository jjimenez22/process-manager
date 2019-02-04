import React, {Component} from "react";
import {restPut} from "../../commons/RestUtils";
import DictumForm from "./DictumForm";

export default class DictumEdit extends Component {

    handleClick = (e) => {
        const body = this.state.dictum;
        const history = this.props.history;
        restPut(body._links.self.href, body, res => {
            console.log("Successfully saved dictum: ", res);
            history.push({pathname: '/'});
        });
        e.preventDefault();
    };

    constructor(props) {
        super(props);
        this.state = {
            dictum: this.props.location.state.dictum,
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
                onCancelPath={'/'}
            />
        );
    }
}