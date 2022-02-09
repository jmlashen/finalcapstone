import React from "react";
import { Link } from "react-router-dom";
import { Button, OverlayTrigger } from "react-bootstrap";

export const DrillButton = ({drillType}) => {
    console.log(drillType.title)
    return (
        <>
        <Link to={`drills/create/${drillType.id}`}>
        
        <div className="drill-type-buttons-container">
           
        <Button className="drill-type-buttons">{drillType.title}</Button>
       
        </div>
        
        </Link>
        
        
        </>
    )
}

