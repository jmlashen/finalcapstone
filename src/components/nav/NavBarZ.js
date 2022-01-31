import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBarZ = () => {
    return (
        <>
            <Navbar>
                <Nav>
                    <Link to="/"><h1>home</h1></Link>
                    <Link to="/drills">drills</Link>
                    <Link to="/contacts">contacts</Link>
                </Nav>
            </Navbar>
        </>
    )
}