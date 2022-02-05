import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"



export const DrillCard = ({ drill, handleDeleteDrill }) => {

    const history = useHistory();
    console.log(drill)




    return (
        <>
            <div>
                <h1>{(drill.drill_type.title)} Drill</h1>
                <h3>Drill stared:</h3><p>{drill.start_time}</p>
                <h3>Drill ended:</h3><p>{drill.end_time}</p>
                {drill.light_check_status == true ? <p>Light checked</p> : null}
                <h3>Conducted by:</h3><p>{drill.admin.name}</p>
                <p>{drill.notes}</p>

                <button type="button"
                    onClick={() => history.push(`/drills/${drill.id}/edit`)}>
                    Edit
                </button>

                <button type="button"
                    onClick={() => handleDeleteDrill(drill.id)}>
                    Delete
                </button>
            </div>
        </>
    )
}

