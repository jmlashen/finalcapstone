import React from "react"
import { Link } from "react-router-dom"

export const ContactCard = ({ contact }) => {

    return (
        <>
            <div>
                <p>{contact.title}</p>

                <a href={`tel:${contact.phone}`}><button>call</button></a>


            </div>
        </>
    )
}