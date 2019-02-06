import React from "react";
import DictumRow from "./DictumRow";
import {PROCESS} from "../../commons/routes";
import {Link} from "react-router-dom";
import UniversalButton from "../../commons/UniversalButton";
import Table from "../../commons/Table"

export default function DictumTable(props) {
    const rows = [];
    if (props.dictums) {
        props.dictums.forEach((dictum) => {
            let href = dictum._links.self.href;
            rows.push(
                <DictumRow
                    dictum={dictum}
                    key={href}
                />
            );
        });
    }

    const headerTable = ["Title", "Content", "User"];
    return (
        <div>
            <Link to={PROCESS} className="d-flex justify-content-end">
                <UniversalButton name="Back" class="btn-list"/>
            </Link>

            <Table header={headerTable}>
                {rows}
            </Table>
        </div>
    );
}