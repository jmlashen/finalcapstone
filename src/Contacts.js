import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAllContacts } from "./moduels/ContactsManager";

export const Contacts = () => {
    const [contacts, setContacts] = useState([])
    const getContacts = () => {
        getAllContacts().then(contactsFromAPI => {
        setContacts(contactsFromAPI)
        })
    }
    useEffect(() => {
        getContacts()
    }, [])

    return (
        <>
            {contacts.map(data => <p>{data.title}{data.phone}</p>)}
            {/* {contacts.map(data => <h2>{data.phone}</h2>)} */}
        
           

        </>
    )

}
