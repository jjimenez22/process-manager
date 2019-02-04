import React from "react";
import {DictumRow} from "./DictumRow";

export function DictumTable(props) {
    return (
        <table>
            <thead>
            <th>Title</th>
            <th>Description</th>
            </thead>
            <tbody>
            <DictumRow/>
            </tbody>
        </table>
    )
}