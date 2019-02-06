import React from "react";

export default function Table(props) {
    return (
        <div className="table-container">
            <table className="table table-bordered table-hover table-responsive-md table-sm">
                <thead className="thead-light">
                <tr>
                    {
                        props.header.map((name, index) => (
                            <th scope="col" key={index}>{name}</th>
                        ))
                    }
                </tr>
                </thead>
                <tbody>
                {
                    props.children && props.children.length > 0
                        ? props.children :
                        <tr>
                            <td colSpan={props.header.length}>There's no data to show</td>
                        </tr>
                }
                </tbody>
            </table>
        </div>
    )
}