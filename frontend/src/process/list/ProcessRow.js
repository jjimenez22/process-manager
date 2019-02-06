import React from "react";
import EditDeleteButtons from "../../commons/EditDeleteButtons";
import {DICTUM_FORM, DICTUM_LIST, PROCESS_EDIT} from "../../commons/routes";
import {Link} from "react-router-dom";
import Row from "../../commons/Row";
import UniversalButton from "../../commons/UniversalButton";

export default function ProcessRow(props) {
    const commentsButton = (
        <Link to={{
            pathname: DICTUM_LIST,
            state: {process: props.process}
        }}>
            <UniversalButton name="Comments" class="btn-comment" icon="fas fa-comment-dots"/>
        </Link>
    );
    const editButtons = (
        <EditDeleteButtons
            editPath={PROCESS_EDIT}
            editState={{process: props.process}}
            onDelete={() => {
                props.onDelete(props.id)
            }}
            extra={commentsButton}
        />
    );
    const dictumsButton = (
        <Link to={{
            pathname: DICTUM_FORM,
            state: {
                userHref: props.userHref,
                process: props.process,
                currentUser: props.currentUser
            }
        }}>
            <UniversalButton name="Comments"/>
        </Link>
    );

    const row = [props.process.name, props.process.description]

    return (
        <Row rows={row}>
            {
                props.isDictum ? dictumsButton : editButtons
            }
        </Row>
    );
}