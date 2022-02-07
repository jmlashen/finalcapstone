import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

export const ContactCard = ({ contact }) => {

    return (
        <>
        <div className="contacts-main"></div>
            <div className="contacts-container">
                <h3>{contact.title}</h3>
                <p>{contact.phone}</p>

                <a href={`tel:${contact.phone}`}><Button variant="success">call</Button></a>


            </div>
        </>
    )
}