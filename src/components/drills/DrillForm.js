import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { addDrill, getAllAdmins, getDrillTypeById } from '../../moduels/DrillManager';

export const DrillForm = () => {
    const history = useHistory();
    const {drillId} = useParams();
    const [admins, setAdmins] = useState([]);
    const [drillTypeObj, setDrillTypeObj] = useState({
        id:0, 
        title: ""
    });


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



	

	

	const handleControlledInputChange = (event) => {

		const newDrill = { ...drill }
		let selectedVal = event.target.value

		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}

		newDrill[event.target.id] = selectedVal
	
		setDrill(newDrill)
	}


	const handleClickSaveDrill = (event) => {
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

    
    <form className="DrillForm">
        <h2 className="DrillForm__title">New {drillTypeObj.title} Drill</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="Drill Date">Drill name:</label>
                <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Drill Date" value={drill.drill_date} />
            </div>
        </fieldset>
        {/* <fieldset>
            <div className="form-group">
                <label htmlFor="breed">Drill breed:</label>
                <input type="text" id="breed" onChange={handleControlledInputChange} required className="form-control" placeholder="Drill breed" value={drill.breed} />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="light_check">Assign to location: </label>
                <select value={light_check.drillId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                    <option value="0">Select a location</option>
                    {locations.map(l => (
                        <option key={l.id} value={l.id}>
                            {l.name}
                        </option>
                    ))}
                </select>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="customerId">Customer: </label>
                <select value={drill.customerId} name="customer" id="customerId" onChange={handleControlledInputChange} className="form-control" >
                    <option value="0">Select a customer</option>
                    {customers.map(c => (
                        <option key={c.id} value={c.id}>
                            {c.name}
                        </option>
                    ))}
                </select>
            </div>
        </fieldset> */}
        <button className="btn btn-primary"
            onClick={handleClickSaveDrill}>
            Save Drill
      </button>
    </form>
)
};