import React, { useState } from "react";
import { Route } from "react-router-dom"
import { DrillList } from "./components/drills/DrillList";
import { Redirect } from "react-router";
import { Stopwatch } from "./Stopwatch";
import { Home } from "./Home";
import { NavBarZ } from "./components/nav/NavBarZ";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { DrillForm } from "./components/drills/DrillForm";
import { Footer } from "./components/footer/Footer";
import { Contacts } from "./components/contacts/Contacts";
import { DrillEditForm } from "./components/drills/DrillEditForm";





export const ApplicationViews = ({ isAuthenticated, setAuthUser, clearUser }) => {
    const [show, setShow] = useState(false)
    return (

        <>
            <Route path="/">
                {isAuthenticated ? <NavBarZ clearUser={clearUser} isAuthenticated={isAuthenticated} /> : null}
            </Route>

            <Route exact path="/drills">
            <div className="drills_top_container"></div>
                <DrillList />

            </Route>

            <Route exact path="/contacts">
                <div  className="contacts-background">
                <Contacts />
                </div>

            </Route>

            <Route exact path="/drills/create/:drillId(\d+)">
                <DrillForm />
            </Route>

            <Route exact path="/drills/:drillId(\d+)/edit">
                <DrillEditForm />
            </Route>

            <Route exact path="/home">
            {/* <div  className="contacts-background"> */}
                {isAuthenticated ? <Home /> : <Redirect to="/login" />}
            {/* </div> */}
            </Route>


            <Route exact path="/login">
                <Login setAuthUser={setAuthUser} />
            </Route>

            <Route path="/register">
                <Register setAuthUser={setAuthUser} />
            </Route>

            <Route path="/">
                {isAuthenticated ? <Footer clearUser={clearUser} isAuthenticated={isAuthenticated} /> : null}
            </Route>

        </>

    )
}