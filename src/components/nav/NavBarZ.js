import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
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
            <Navbar>
                <Nav>
                    {isAuthenticated ?
                        <Link to="/home"><h1>home</h1></Link>
                        : null}

                    {isAuthenticated ?
                        <Link to="/drills"><h1>drills</h1></Link>
                        : null}
                    {isAuthenticated ?
                        <Link to="/contacts"><h1>contacts</h1></Link>
                        : null}
                    {isAuthenticated ?
                        <button onClick={handleLogout}>Logout</button>
                        : null}

                    <div>
                        <WeatherCard />
                    </div>

                    <div className="get">
                        <GetUser />
                    </div>

                </Nav>
            </Navbar>
        </>
    )
}