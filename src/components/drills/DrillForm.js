import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { addDrill, getAllAdmins, getDrillTypeById, getDrillTypes } from '../../moduels/DrillManager';
import { Stopwatch } from '../../Stopwatch';
import { formatAMPM } from '../../utils/Date'
import { DrillButton } from '../DrillButton';



export const DrillForm = () => {
    const history = useHistory();
    const {drillId} = useParams();
    const [admins, setAdmins] = useState([]);
    const [drillTypeObj, setDrillTypeObj] = useState({
        id:0, 
        title: ""
    });
    const [startTime, setStartTime] = useState (null)
    const [endTime, setEndTime] = useState (null)

    console.log("drill type from use params is ", drillId)

    let user = parseInt(sessionStorage.getItem("zkhool_user"))
	const [drill, setDrill] = useState({
		drill_date: "",
		drill_typeId: drillId,
		conducted_byId: user,
		start_time: "",
        end_time:"",
        light_check:"",
        notes:"",
        adminId:1,
	});



	

	

	// const handleControlledInputChange = (event) => {

	// 	const newDrill = { ...drill }
	// 	let selectedVal = event.target.value

	// 	if (event.target.id.includes("Id")) {
	// 		selectedVal = parseInt(selectedVal)
	// 	}

	// 	newDrill[event.target.id] = selectedVal
	
	// 	setDrill(newDrill)
	// }

   

	const handleClickSaveDrill = (event) => {
        if (startTime != null) {drill.start_time = formatAMPM(startTime)}
        if (endTime != null) {drill.end_time = formatAMPM(endTime)}
		event.preventDefault() //Prevents the browser from submitting the form

		if (drill.drill_date === 0 || drill.drill_typeId === 0 || drill.start_time === 0 || drill.end_time === 0 || drill.light_check === 0 ) {
			window.alert("Please complete entire form")
		} else {
		
			addDrill(drill)
				.then(() => history.push("/drills"))
		}
	}

    useEffect(() => {

	
        getAllAdmins().then(admins => {
            setAdmins(admins)
        })
        getDrillTypeById(drillId).then(drillObj => {
            setDrillTypeObj(drillObj)
            console.log(drillTypeObj)
        });

        
	}, []);

return (

    <>
    <h2 className="DrillForm__title">New {drillTypeObj.title} Drill</h2>
    <Stopwatch setStartTime={setStartTime} setEndTime={setEndTime}/>
   
    
    
    {/* <form className="DrillForm">
        <fieldset>
            <div className="form-group">
                <label htmlFor="Drill Date">Drill Date:</label>
                <input type="date" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Drill Date" value={drill.drill_date} />
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="Drill Date">Start Time:</label>
                <input type="time" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Start Time" value={drill.start_time} />
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="Drill Date">End Time:</label>
                <input type="time" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Start Time" value={drill.end_time} />
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="light_check">Light Check?</label>
                <select value={drill.light_check} id="name" onChange={handleControlledInputChange} className="form-control" >
                <option value="0"></option>
                    <option value="0">Yes</option>
                        <option value="1">Reported Not Working</option>
                </select>
            </div>
        </fieldset>

       
    </form> */}

    <button className="btn btn-primary"
            onClick={handleClickSaveDrill}>
            Save Drill
      </button>

    </>
)
};