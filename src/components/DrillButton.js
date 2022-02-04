import React from "react";
import { Link } from "react-router-dom";

export const DrillButton = ({drillType}) => {
    console.log(drillType.title)
    return (
        <>
        <Link to={`drills/create/${drillType.id}`}>
        <button>{drillType.title}</button>
        </Link>

        
        </>
    )
}

