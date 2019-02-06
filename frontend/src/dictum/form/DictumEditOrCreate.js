import React, {Component} from 'react'
import {restGet} from "../../commons/RestUtils";
import DictumEdit from "./DictumEdit";
import DictumCreate from "./DictumCreate";
import {DICTUM} from "../../commons/routes";

export default class DictumEditOrCreate extends Component {
    constructor(props) {
        super(props);
        this.userHref = this.props.location.state.userHref;
        this.currentUser = this.props.location.state.currentUser;
        this.process = this.props.location.state.process;
        this.href = this.process._links.self.href;
        this.state = {
            dictums: null
        };

        this.redirect = this.redirect.bind(this);
    }

    componentWillMount() {
        restGet(this.href + "/dictums", obj => {
            this.setState({
                dictums: obj._embedded.dictums
            })
        })
    }

    redirect() {
        this.props.history.push({
            pathname: DICTUM,
            state: {currentUser: this.currentUser}
        });
    }

    render() {
        if (this.state.dictums == null)
            return null;

        let dictum = this.state.dictums
            .find(dictum => dictum.user === this.userHref);
        if (dictum) {
            return (
                <DictumEdit
                    dictum={dictum}
                    redirect={this.redirect}
                    currentUser={this.currentUser}
                />
            );
        } else {
            return (
                <DictumCreate
                    processHref={this.href}
                    userHref={this.userHref}
                    redirect={this.redirect}
                    currentUser={this.currentUser}
                />
            );
        }
    }
}