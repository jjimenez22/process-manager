import React, {Component} from "react";
import {restGet} from "../../commons/RestUtils";
import Row from "../../commons/Row";

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
        const row = [this.props.dictum.title, this.props.dictum.content, this.state.username]
        return (
            <Row rows={row}/>
        );
    }
}