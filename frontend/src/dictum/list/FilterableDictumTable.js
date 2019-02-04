import React, {Component} from "react";
import {BASE_PATH, restDelete, restGet} from "../../commons/RestUtils";
import {Link} from "react-router-dom";
import DictumTable from "./DictumTable";
import {DICTUM_CREATE} from "../../commons/routes";

export default class FilterableDictumTable extends Component {

    constructor(props) {
        super(props);
        this.state = {dictums: null};

        this.fetchDictums = this.fetchDictums.bind(this);
        this.deleteDictum = this.deleteDictum.bind(this);
    }

    fetchDictums() {
        restGet(BASE_PATH + "/dictums", obj => {
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
                <Link to={DICTUM_CREATE}>
                    <button>Create New</button>
                </Link>
                <br/>
                <DictumTable
                    dictums={this.state.dictums}
                    onDelete={this.deleteDictum}
                />
            </div>
        );
    }
}