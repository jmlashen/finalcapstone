import React, { useState, useEffect } from "react";
import { DrillButton } from "./components/DrillButton";
import { GetUserHome } from "./components/nav/GetUserHome";
import { getDrillTypes } from "./moduels/DrillManager";

export const Home = () => {

    const [drillTypes, setDrillTypes] = useState ([]);

    

    useEffect(() => {
	
        getDrillTypes().then(drill_types => {
            setDrillTypes(drill_types)
            console.log(drillTypes)
        }) 
	}, []);
    return (
        <>
            <h1><GetUserHome/></h1>
            <h2>What type of drill are you conducting today?</h2>

            {drillTypes.map(drillType => 
                <DrillButton
                    key={drillType.id}
                    drillType={drillType} />)}


        </>
    )
}
