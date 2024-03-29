import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { Input, Label } from 'reactstrap';
import { addDrill, getAllAdmins, getDrillTypeById } from '../../moduels/DrillManager';
import { Stopwatch } from '../../Stopwatch';
import { formatAMPM } from '../../utils/Date'
import "../../styles/custom.scss";
import { Link } from 'react-router-dom'



export const DrillForm = () => {
    const history = useHistory();
    const { drillId } = useParams();
    const [admins, setAdmins] = useState([]);
    const [drillTypeObj, setDrillTypeObj] = useState({
        id: 0,
        title: ""
    });
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)

    console.log("drill type from use params is ", drillId)

    let user = parseInt(sessionStorage.getItem("zkhool_user"))
    const [drill, setDrill] = useState({
        drill_typeId: parseInt(drillId),
        adminId: user,
        start_time: "",
        end_time: "",
        light_check_status: false,
        notes: "",

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

    const handleCheckBoxClick = (event) => {
        const newDrill = { ...drill, light_check_status: event.target.checked }
        setDrill(newDrill)
    }


    const handleClickSaveDrill = (event) => {
        if (startTime != null) { drill.start_time = formatAMPM(startTime) }
        if (endTime != null) { drill.end_time = formatAMPM(endTime) }
        event.preventDefault() //Prevents the browser from submitting the form

        if (drill.drill_typeId === 0 || drill.start_time === 0 || drill.end_time === 0 || drill.light_check_status === false) {
            window.alert("Did you check the lights?")
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

            <Stopwatch setStartTime={setStartTime} setEndTime={setEndTime} />

            <div className="notes-contain">
                <div className='label-indent'>
                <Label htmlFor="notes"></Label>
                </div>
                <textarea className="form-notes" type="text" id="notes" onChange={handleControlledInputChange} placeholder="Any notes?" value={drill.notes} />
            </div>

            <div className="checkbox-contain">
                <Input className="checkbox" onChange={handleCheckBoxClick} value={drill.light_check_status} type="checkbox" id="light_check_status"></Input>
                <Label className="checkLabel" htmlFor="check"><div className="lights_checked"><p>lights checked?</p></div></Label>
            </div>

            <div className="save-drill">

                <Button 
                    onClick={handleClickSaveDrill}>
                    Save Drill
                </Button>
            </div>

            <div className="cancel-drill">
                <Button>
                    <Link to="/home">Cancel Drill</Link>
                </Button>
            </div>



        </>
    )
};