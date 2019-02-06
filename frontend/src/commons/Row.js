import React from "react";

export default function Row(props) {
    return (
        <tr>
            {
                props.rows.map((data, index) =>
                    <td key={index}>
                        {data}
                    </td>
                )
            }{
            props.children &&
            <td>{props.children}</td>
        }
        </tr>
    )
}