import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
//the {} says that it is not a default export

const ContactList = (props) => {
    const deleteContactHandler = (id) => {
        props.getContactid(id);
    };

    const renderContactList = props.contacts.map((contact, i) => {
        return <ContactCard key={i} contact={contact} clickHandler={deleteContactHandler} />;
    });

    return (
        <div style={{ position: 'relative' }}>
            <h2>Contact List</h2>
            <Link to="/add">
                <button className="ui button blue" style={{ position: 'absolute', top: 0, right: 0 }}>
                    Add Contact
                </button>
            </Link>
            <div className="ui celled list">{renderContactList}</div>
        </div>
    );
};

export default ContactList;
