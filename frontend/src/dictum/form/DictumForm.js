import React from 'react';
import PageTitle from "../../commons/PageTitle"
import {Link} from "react-router-dom";
import InputForm from "../../user/form/InputLabel";
import UniversalButton from "../../commons/UniversalButton";
import Card from "../../login/Card";

export default function DictumForm(props) {

    const dictum = props.dictum ? props.dictum : {};
    const data = [
        {name: "Title", id: "titleId", type: "text", value: dictum.title, onChange: props.onTitleChange},
        {name: "Content", id: "contentId", value: dictum.content, onChange: props.onContentChange, textarea: true},
    ];

    return (
        <div className="h-100">
            <PageTitle title={props.dictum ? "Edit comment" : "Add a new comment"}/>
            <Card class="registerUser">
                <form>
                    {
                        data.map((elem, index) => (
                            <InputForm
                                key={index}
                                name={elem.name}
                                id={elem.id}
                                type={elem.type}
                                value={elem.value}
                                onChange={elem.onChange}
                                textarea={elem.textarea}
                            />
                        ))
                    }
                    <div style={{marginTop: "35px"}}>
                        <UniversalButton onClick={props.onAccept} name="Accept" class="btn-acept"/>
                        <Link to={{
                            pathname: props.onCancelPath,
                            state: {currentUser: props.currentUser}
                        }}>
                            <UniversalButton name="Cancel" class="btn-cancel"/>
                        </Link>
                    </div>

                </form>
            </Card>
        </div>
    )
}