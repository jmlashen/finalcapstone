import React from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"


export const DrillCard = ({ drill, handleDeleteDrill }) => {
    const history = useHistory();
    console.log(drill)
    return (
        <Link to={`/drills/${drill.id}`}>
        <div>
            <h1>{(drill.drill_type.title)} Drill</h1>
            <h3>{(drill.drill_date)}</h3>
            <h3>Drill Stared:</h3><p>{drill.start_time}</p>
            <h3>Drill Ended:</h3><p>{drill.end_time}</p>
            <p>{drill.light_check}</p>
            
            <button type="button"
                onClick={() => history.push(`/drills/${drill.id}/edit`)}>
                Edit
            </button>

            <button type="button"
                onClick={() => handleDeleteDrill(drill.id)}>
                Delete
            </button>
        </div>
        </Link>
    )
}

