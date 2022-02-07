import React, { useState, useEffect } from "react";
import { DrillButton } from "./components/DrillButton";
import { GetUserHome } from "./components/nav/GetUserHome";
import { getDrillTypes } from "./moduels/DrillManager";
import home from "./images/home.svg"

export const Home = () => {

    const [drillTypes, setDrillTypes] = useState([]);



    useEffect(() => {

        getDrillTypes().then(drill_types => {
            setDrillTypes(drill_types)
            console.log(drillTypes)
        })
    }, []);
    return (
        <>
        
            {/* <div className="zkhool-header">
                <img className="zkhool-logo" src={home} alt="logo" />
            </div> */}
            <div className="greeting">
            <div className="greeting-home-contain"> 
            <div className="get_user_home">
                <GetUserHome />
            </div>

            <div className="home-greeting">
                <p>What type of drill are you conducting today?</p>
            </div>
            </div>
            </div>
            
      

            {drillTypes.map(drillType =>
                <DrillButton
                    key={drillType.id}
                    drillType={drillType} />)}


        </>
    )
}
