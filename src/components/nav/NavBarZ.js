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

        if (retVal == true) {
            history.push('/login');
            clearUser();
        } else {
            return false
        }
    }


    return (
        <>
            <Navbar expand="lg" fixed="top"  variant="dark" className="nav d-flex justify-content"><div className="nav-header"><h1>ZKHOOL</h1></div>
                
                <Navbar.Toggle/>
                
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav expand="false">
                        <div className="navcontain">
                            {isAuthenticated ?
                                <Link to="/home">HOME</Link>
                                : null}

                            {isAuthenticated ?
                                <Link to="/drills">DRILLS</Link>
                                : null}
                            {isAuthenticated ?
                                <Link to="/contacts">CONTACTS</Link>
                                : null}
                            {isAuthenticated ?
                                <Link to="/login" onClick={handleLogout}>LOGOUT</Link>
                                : null}

                         
                        </div>
                    </Nav>
                    </Navbar.Collapse>
                    
            </Navbar>
            
        </>
    )
}