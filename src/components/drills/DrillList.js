import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAllDrills } from "../../moduels/DrillManager";

export const DrillList = () => {
    const [drills, setDrills] = useState([])
    const getDrills = () => {
        getAllDrills().then(drillsFromAPI => {
            setDrills(drillsFromAPI)
        })
    }
    useEffect(() => {
        getDrills()
    }, [])

    return (
        <>
            {drills.map(data => <h2>{data.light_check}</h2>)}


        </>
    )

}