import React from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"


export const DrillCard = ({ drill, handleDeleteDrill }) => {
    const history = useHistory();

    return (
        <Link to={`/drills/${drill.id}`}>
        <div>

            <h1>{(drill.drill_date)}</h1>
            <h1>{drill.start_time}</h1>
            <h1>{drill.end_time}</h1>
            <h1>{drill.light_check}</h1>
            
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

