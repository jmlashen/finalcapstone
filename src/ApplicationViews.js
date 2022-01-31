import React from "react";
import { Route } from "react-router-dom"
import { DrillList } from "./components/drills/DrillList";
import { MyStopwatch } from "./Timer";
import { Home } from "./Home";
import { Contacts } from "./Contact";
import { NavBarZ } from "./components/nav/NavBarZ";

export const ApplicationViews = () => {

    return (

        <>
    <Route>
        <NavBarZ />
    </Route>

            <Route exact path="/drills">
                <DrillList />
                <MyStopwatch />
            </Route>

            <Route path="/">
                <Home />
            </Route>

            <Route exact path="contacts">
                <Contacts />
            </Route>

        </>

    )
}