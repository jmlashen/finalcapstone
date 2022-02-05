import React from "react"
import { Link } from "react-router-dom"

export const ContactCard = ({ contact }) => {

    return (
        <>
            <div>
                <h1>{contact.title}</h1>

                <a href={`tel:${contact.phone}`}><button>call</button></a>


            </div>
        </>
    )
}