import React from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"


export const DrillCard = ({ drill, handleDeleteDrill }) => {
    const history = useHistory();

    return (
        <Link to={`/drills/${drill.id}`}>
        <div>

            <p>{(drill.drill_date)}</p>
            <p>{drill.start_time}</p>
            <p>{drill.end_time}</p>
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

