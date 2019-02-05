import React from "react";
import DictumRow from "./DictumRow";
import {PROCESS} from "../../commons/routes";
import {Link} from "react-router-dom";

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
    return (
        <div>
            <Link to={PROCESS}>
                <button>Back</button>
            </Link>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Content</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}