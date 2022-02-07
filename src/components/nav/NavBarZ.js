import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import "../../styles/custom.scss"
import { WeatherCard } from "../../WeatherCard";
import { GetUser } from "./GetUser";


export const NavBarZ = ({ clearUser, isAuthenticated }) => {

    const history = useHistory()

    const handleLogout = () => {
        const retVal = window.confirm("Are you sure you want to Logout?")

        if (retVal == true) {
            history.push('/login');
            clearUser();
        } else {
            return false
        }
    }


    return (
        <>
            <Navbar collapseOnSelect fixed="top" expand="lg" variant="dark" className="nav d-flex justify-content"><div className="nav-header"><h1>ZKHOOL</h1><GetUser/></div>
                
                <Navbar.Toggle/>
                
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <div className="navcontain">
                            {isAuthenticated ?
                                <Link to="/home">Home</Link>
                                : null}

                            {isAuthenticated ?
                                <Link to="/drills">Drills</Link>
                                : null}
                            {isAuthenticated ?
                                <Link to="/contacts">Contacts</Link>
                                : null}
                            {isAuthenticated ?
                                <Link to="/login" onClick={handleLogout}>Logout</Link>
                                : null}

                         
                        </div>
                    </Nav>
                    </Navbar.Collapse>
            </Navbar>
            
        </>
    )
}