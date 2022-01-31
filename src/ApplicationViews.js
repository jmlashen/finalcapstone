import React, { useState } from "react";
import { Route } from "react-router-dom"
import { DrillList } from "./components/drills/DrillList";
import { Redirect } from "react-router";
import { Stopwatch } from "./Stopwatch";
import { Home } from "./Home";
import { Contacts } from "./Contacts";
import { NavBarZ } from "./components/nav/NavBarZ";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";

export const ApplicationViews = ({ isAuthenticated, setAuthUser, clearUser }) => {
    const [show, setShow] = useState(false)
    return (

        <>
            <Route path="/">
                {isAuthenticated ? <NavBarZ clearUser={clearUser} isAuthenticated={isAuthenticated} /> : null}
            </Route>

            <Route exact path="/drills">
                <DrillList />
                <Stopwatch />
            </Route>

            <Route exact path="/">
            {isAuthenticated ? <Home /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/contacts">
                <Contacts />
            </Route>

            <Route exact path="/login">
                <Login setAuthUser={setAuthUser} />
            </Route>

            <Route path="/register">
                <Register setAuthUser={setAuthUser} />
            </Route>

        </>

    )
}