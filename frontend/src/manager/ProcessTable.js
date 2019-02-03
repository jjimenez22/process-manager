import React from "react";
import {ProcessRow} from "./ProcessRow";

export function ProcessTable(props) {
    return (
        <table>
            <thead>
            <th>Title</th>
            <th>Description</th>
            </thead>
            <tbody><ProcessRow/></tbody>
        </table>
    );
}