import React from 'react';
import SweetAlert from "react-bootstrap-sweetalert";

export default function ShowAlert(props) {
    return (
        <SweetAlert
            show={props.showAlert}
            danger
            title=""
            confirmBtnText="Accept"
            focusConfirmBtn={false}
            confirmBtnStyle={{backgroundColor: "#2972a2"}}
            onConfirm={props.onConfirm}>
            {props.errorMessage}
        </SweetAlert>
    );
}