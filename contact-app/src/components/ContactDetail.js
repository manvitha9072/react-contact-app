import React from "react";
import avatar from "../images/avatar.png";
import {Link, useParams} from "react-router-dom";

const ContactDetail = (props) => {
    const {id} = useParams();
    const contact = props.contacts.find((c)=>c.id===id)
    const { name, email } = contact;
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={avatar} alt="user"></img>
                    <div className="content">
                        <div className="header">{name}</div>
                        <div className="desc">{email}</div>
                    </div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                <button className="ui button blue center">Back To Contact List</button>
                </Link>
            </div>
        </div>
    );
}
export default ContactDetail;