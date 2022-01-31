import React from "react";
import { Route } from "react-router-dom"
import { DrillList } from "./components/drills/DrillList";
import { MyStopwatch } from "./Timer";
import { Home } from "./Home";
import { Contacts } from "./Contact";

export const ApplicationViews = () => {

    return (

        <>


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