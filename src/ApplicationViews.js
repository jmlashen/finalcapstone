import React from "react";
import { Route } from "react-router-dom"
import { DrillList } from "./components/drills/DrillList";
import { MyStopwatch } from "./Timer";


export const ApplicationViews = () => {

    return (

        <>

            <Route path="/drills">
                <DrillList />
            </Route>

            <Route path="/timer">
                <MyStopwatch />
            </Route> 

            <Route exact path="/">
                <h1>home</h1>
            </Route>

        </>

    )
}