import React, {Component} from "react";
import {restGet} from "../../commons/RestUtils";

export default class DictumRow extends Component {
    constructor(props) {
        super(props);
        this.state = {username: null}
    }

    componentDidMount() {
        restGet(this.props.dictum.user, obj => {
            this.setState({username: obj.username});
        });
    }

    render() {
        return (
            <tr>
                <td>{this.props.dictum.title}</td>
                <td>{this.props.dictum.content}</td>
                <td>{this.state.username}</td>
            </tr>
        );
    }
}