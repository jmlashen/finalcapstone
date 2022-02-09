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
                    <h2>{(drill.drill_type.title)} Drill</h2>
                    <h6>{drill.start_time}</h6>
                </div>

                <div className="drills_container">

                    <div className="drill-headers">
                        <h5>End Time:</h5>
                    </div>
                    <p>{drill.end_time}</p>
                    {/* <h5>Lights checked:</h5> */}
                    <div className="drill-headers">
                        <h5>Conducted by:</h5>
                    </div>
                    <p>{drill.admin.name}</p>
                    <div className="drill-headers">
                        <h5>Notes:</h5>
                    </div>
                    <div>
                        <div>
                            {drill.light_check_status == true ? <span>Lights Working ✓</span> : null}
                        </div>
                        <div className="drill_notes">
                            {drill.notes}
                        </div>
                    </div>
                </div>

                <div className="drill_buttons">
                    <Button variant="warning"
                        onClick={() => handleDeleteDrill(drill.id)} >
                        Delete
                    </Button>

                    <Button
                        onClick={() => history.push(`/drills/${drill.id}/edit`)}>
                        Edit Note
                    </Button>
                </div>
            </div>

        </>
    )
}

