// import React, {useState, useEffect} from "react";
// import Header from "./Header";
// import AddContact from "./AddContact"
// import ContactList from "./ContactList"
// import {v4 as uuidv4} from "uuid"

// import './App.css';

// function App() {
//   const LOCAL_STORAGE_KEY = "contacts";
//   const [contacts, setContacts] = useState([]);

//   const AddContactHandler = (contact) => {
//     console.log([...contacts, { id: uuidv4(), ...contact }])
//     setContacts([...contacts, { id: uuidv4(), ...contact }]);
//   };


//   const removeContactHandler = (id) => {
//     const newContactList = contacts.filter((contact) => {
//       return contact.id !== id;
//     })
//     setContacts(newContactList);
//   }
//   useEffect(()=> {
//     const retreiveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//     if(retreiveContacts) setContacts(retreiveContacts);
//   },[]);

//   useEffect(()=> {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
//   },[contacts]);

//   return (
//     <div className="ui container">
//       <Header />
//       <AddContact AddContactHandler = {AddContactHandler}/>
//       <ContactList contacts={contacts} getContactid={removeContactHandler}/>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactDetail from "./ContactDetail";

import "./App.css";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const AddContactHandler = (contact) => {
    const newContacts = [...contacts, { id: uuidv4(), ...contact }];
    setContacts(newContacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContacts));
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList));
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ContactList contacts={contacts} getContactid={removeContactHandler} />} />
          <Route path="/add" element={<AddContact AddContactHandler={AddContactHandler} />} />
          <Route path="/contact/:id" element={<ContactDetail contacts={contacts}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

