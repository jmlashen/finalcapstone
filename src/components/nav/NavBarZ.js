import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import "../../styles/custom.scss"



export const NavBarZ = ({ clearUser, isAuthenticated }) => {

    const history = useHistory()

    const handleLogout = () => {
        const retVal = window.confirm("Are you sure you want to Logout?")
        console.log(retVal)
        if (retVal == true) {
            clearUser();
            history.push('/login');
            
            
            
        } else {
            return false
        }
    }


    return (
        <>
            <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark" className="nav d-flex justify-content">

                <div className="nav-header">
                    <a href="/home" rel="noreferrer">ZKHOOL</a>
                </div>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav expand="false">
                        <div className="navcontain">
                            {isAuthenticated ?
                                <Nav.Link href="/home">HOME</Nav.Link>
                                : null}
                            {isAuthenticated ?
                                <Nav.Link href="/drills">DRILLS</Nav.Link>
                                : null}
                            {isAuthenticated ?
                                <Nav.Link href="/contacts">CONTACTS</Nav.Link>
                                : null}
                            {isAuthenticated ?
                                <Nav.Link onClick={handleLogout}>LOGOUT</Nav.Link>
                                : null}
                        </div>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>

        </>
    )
}