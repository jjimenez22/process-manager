import React from "react";
import {BASE_PATH, restPatchUris, restPost} from "../../commons/RestUtils";
import DictumForm from "./DictumForm";
import {DICTUM} from "../../commons/routes";

export default class DictumCreate extends React.Component {

    handleClick = (e) => {
        const body = {
            title: this.state.title,
            content: this.state.content,
            user: this.props.userHref
        };
        const redirect = this.props.redirect;
        restPost(BASE_PATH + '/dictums', body, res => {
            console.log("Successfully saved dictum: ", res);
            restPatchUris(this.props.processHref + "/dictums",
                [res._links.self.href], put => {
                    console.log("Successfully saved dictum into process: ", put);
                    redirect();
                });
        });
        e.preventDefault();
    };

    constructor(props) {
        super(props);
        this.currentUser = props.currentUser;
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
                onCancelPath={DICTUM}
                currentUser={this.currentUser}
            />
        );
    }

}
