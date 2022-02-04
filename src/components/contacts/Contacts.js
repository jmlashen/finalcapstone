import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAllContacts } from "../../moduels/ContactsManager";
import { ContactCard } from "./ContactCard";

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
            {contacts.map(contact => <ContactCard key={contact.id} contact={contact}/>)}
        </>
    )

}
