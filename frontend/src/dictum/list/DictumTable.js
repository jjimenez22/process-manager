import React from "react";
import DictumRow from "./DictumRow";

export default function DictumTable(props) {
    const rows = [];
    if (props.dictums) {
        props.dictums.forEach((dictum) => {
            let href = dictum._links.self.href;
            rows.push(
                <DictumRow
                    dictum={dictum}
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
                <th>Title</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}