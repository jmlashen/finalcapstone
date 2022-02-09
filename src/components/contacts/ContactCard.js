import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { BsFillTelephoneFill } from "react-icons/bs"

export const ContactCard = ({ contact }) => {


    return (
        <>

            <div className="contacts-main"></div>
            <div className="contacts-container">
                <div className="contact-title">
                    <h4>{contact.title}</h4>
                </div>
                <p>{contact.phone}</p>

                <a href={`tel:${contact.phone}`}><Button variant="success"><span><BsFillTelephoneFill /> &nbsp; Call&nbsp;</span></Button></a>


            </div>
        </>
    )
}