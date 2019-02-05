import React from "react";


export default function Card(props) {
    return (
        <div className={`user-login ${props.class}`}>
            <div className="container">
                <div className="row d-flex justify-content-center h-100">
                    <div className="col-12 col-md-8 justify-content-center align-items-center d-flex">
                        <div className="card">

                            {/*Header of the card*/}
                            <div className="card-header">
                                <h3>{props.title}</h3>
                            </div>

                            {/*Body of the card*/}
                            <div className="card-body">
                                {props.children}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}