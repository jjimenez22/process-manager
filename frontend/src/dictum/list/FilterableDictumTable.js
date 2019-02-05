import React, {Component} from "react";
import {restDelete, restGet} from "../../commons/RestUtils";
import DictumTable from "./DictumTable";

export default class FilterableDictumTable extends Component {

    constructor(props) {
        super(props);
        this.state = {dictums: null};
        this.process = props.location.state.process;
        this.href = this.process._links.self.href;

        this.fetchDictums = this.fetchDictums.bind(this);
        this.deleteDictum = this.deleteDictum.bind(this);
    }

    fetchDictums() {
        restGet(this.href + "/dictums", obj => {
            this.setState({
                dictums: obj._embedded.dictums
            })
        });
    }

    deleteDictum(href) {
        restDelete(href, this.fetchDictums);
    }

    componentDidMount() {
        this.fetchDictums();
    }

    render() {
        return (
            <div>
                <DictumTable
                    dictums={this.state.dictums}
                    onDelete={this.deleteDictum}
                />
            </div>
        );
    }
}