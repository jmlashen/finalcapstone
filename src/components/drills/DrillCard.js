import React from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"


export const DrillCard = ({ drill, handleDeleteDrill }) => {
    const history = useHistory();

    return (

<section>
    <h1>{(drill.drill_date)}</h1>
   <h1>{drill.start_time}</h1>
   <h1>{drill.stop_time}</h1>
   <h1>{drill.light_check}</h1>
    <button type="button" onClick={() => handleDeleteDrill(drill.id)}>Discharge</button>
    <Link to={`/drills/${drill.id}`}>
        <button>Details</button>
    </Link>
    <button type="button"
        onClick={() => history.push(`/drills/${drill.id}/edit`)}>
        Edit
    </button>
  



</section>
    )}

