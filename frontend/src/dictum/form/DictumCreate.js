import React from "react";
import {BASE_PATH, restPost} from "../../commons/RestUtils";
import DictumForm from "./DictumForm";

export default class DictumCreate extends React.Component {

    handleClick = (e) => {
        const body = {
            title: this.state.title,
            content: this.state.content,
        };
        const history = this.props.history;
        restPost(BASE_PATH + '/dictums', body, res => {
            console.log("Successfully saved dictum: ", res);
            history.push({pathname: '/'});
        });
        e.preventDefault();
    };

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
        };
    }

    render() {
        return (
            <DictumForm
                onTitleChange={e => {
                    this.setState({
                        title: e.target.value
                    })
                }}
                onContentChange={e => {
                    this.setState({
                        content: e.target.value
                    })
                }}
                onAccept={this.handleClick}
                onCancelPath={'/'}
            />
        );
    }

}
