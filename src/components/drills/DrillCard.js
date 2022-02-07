import React, { useState, useEffect } from "react"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../../styles/custom.scss"


export const DrillCard = ({ drill, handleDeleteDrill }) => {

    const history = useHistory();
    console.log(drill)




    return (
        <>


            <div className="drills_main_container">
                <div className="drills_title_container">
                    <h1>{(drill.drill_type.title)} Drill</h1>
                    <h5>{drill.start_time}</h5>
                </div>
                <div className="drill_buttons">
                    <Button
                        onClick={() => handleDeleteDrill(drill.id)}>
                        Delete
                    </Button>

                    <Button
                        onClick={() => history.push(`/drills/${drill.id}/edit`)}>
                        Edit Notes
                    </Button>
                </div>
                <div className="drills_container">


                    <h5>End Time:</h5>
                    <p>{drill.end_time}</p>
                    {/* <h5>Lights checked:</h5> */}
                    
                    <h5>Conducted by:</h5>
                    <p>{drill.admin.name}</p>
                    <h5>Notes:</h5>
                    <p>{drill.light_check_status == true ? <p>Lights Working</p> : null}{drill.notes}</p>
                </div>
            </div>

        </>
    )
}

