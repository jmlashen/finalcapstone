import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getDrillById, updateDrill } from '../../moduels/DrillManager';




export const DrillEditForm = () => {


    const [drill, setDrill] = useState({

        drill_typeId: 0,
        adminId: "",
        start_time: "",
        end_time: "",
        light_check_status: "",
        notes: "",



    })

    // const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    const {drillId} = useParams()
    console.log(drillId)

   

    const handleFieldChange = event => {
        const stateToChange = { ...drill }
        stateToChange[event.target.id] = event.target.value;
        setDrill(stateToChange)
    }


    const updateExistingDrill = event => {
        event.preventDefault()
        // setIsLoading(true)

        const editedDrill = {
            
            id: drillId,
            drill_typeId: drill.drill_typeId,
            adminId: drill.adminId,
            start_time: drill.start_time,
            end_time: drill.end_time,
            light_check_status: drill.light_check_status,
            notes: drill.notes

        }

        updateDrill(editedDrill)
        .then(() => history.push("/drills"))
         
    }

    useEffect(() => {
        getDrillById(drillId)
            .then(drill => {
                setDrill(drill)
                // setIsLoading(false)
            })
    }, [])

    return (

        <>

            <div>
                <label htmlFor="notes"></label>
                <textarea className="form-notes" type="text" id="notes" onChange={handleFieldChange} placeholder="notes" value={drill.notes} />
            </div>

           <h1>HI!</h1>

            <button className="btn btn-primary"
                onClick={updateExistingDrill}>
                Save Drill
            </button>

        </>
    )
};
