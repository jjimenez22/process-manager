import React from "react";
import ProcessRow from "./ProcessRow";

export default function ProcessTable(props) {
    const rows = [];
    if (props.processes) {
        props.processes.forEach((process) => {
            let href = process._links.self.href;
            rows.push(
                <ProcessRow
                    process={process}
                    key={href}
                    id={href}
                    onDelete={props.onDelete}
                />
            );
        });
    }
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}