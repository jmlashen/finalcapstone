import React, { useState, useEffect } from "react";
import { DrillButton } from "./components/DrillButton";
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
            <h1>this is the home page</h1>

            {drillTypes.map(drillType => 
                <DrillButton
                    key={drillType.id}
                    drillType={drillType} />)}


        </>
    )
}
