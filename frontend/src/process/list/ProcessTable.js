import React from "react";
import ProcessRow from "./ProcessRow";
import Table from "../../commons/Table"

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
                    isDictum={props.isDictum}
                    userHref={props.userHref}
                    currentUser={props.currentUser}
                />
            );
        });
    }

    const headerTable = ["Name", "Description", "Action"];

    return (
        <Table header={headerTable}>
            {rows}
        </Table>
    );
}