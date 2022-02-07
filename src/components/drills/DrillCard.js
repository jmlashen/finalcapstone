import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"



export const DrillCard = ({ drill, handleDeleteDrill }) => {

    const history = useHistory();
    console.log(drill)




    return (
        <>
            <div>
                <p>{(drill.drill_type.title)} Drill</p>
                <p>Drill stared:</p><p>{drill.start_time}</p>
                <p>Drill ended:</p><p>{drill.end_time}</p>
                {drill.light_check_status == true ? <p>Light checked</p> : null}
                <p>Conducted by:</p><p>{drill.admin.name}</p>
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

