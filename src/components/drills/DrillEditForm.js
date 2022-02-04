// import React, { useState, useEffect } from "react"
// import { getRoundById, updateRound } from "../modules/RoundDataManager"
// import "./Round.css"
// import { GetAllCourses } from "../modules/CoursesDataManager"



// export const DrillEditForm = ({reloadForm, toggleEdit, drill}) => {
   

//     const [drills, setDrills] = useState({ 

//         notes: "",
      

//     })

//     const [isLoading, setIsLoading] = useState(false)

//     const drillId = drill.id
//     const [courses, setCourses] = useState([])
//     // USESTATE: useState is a Hook that allows you to have state variables in 
//     // functional components. You pass the initial state to the
//     // function and it returns a variable with the current state value 
//     // (not necessarily the initial state) and another function 
//     // to update this value.

//     const handleFieldChange = event => {
//         const stateToChange = { ...rounds }
//         stateToChange[event.target.id] = event.target.value;
//         setRounds(stateToChange)
//     }


//     const updateExistingRound = event => {
//         event.preventDefault()
//         setIsLoading(true)

//         const editedRound = {
//             id: roundId,
//             courseId: rounds.courseId,
//             roundDate: rounds.roundDate,
//             score: rounds.score,
//             reflection: rounds.reflection,
//             userId: rounds.userId
//             // image: image ? image : courses.image
//         }

//         updateRound(editedRound)
//             .then(toggleEdit)
//             .then(reloadForm)
//     }

//     useEffect(() => {
//         getRoundById(roundId)
//             .then(round => {
//                 setRounds(round)
//                 setIsLoading(false)
//             })
//     }, [])

//     useEffect(() => {
//         GetAllCourses()
//             .then(courses => {
//                 setCourses(courses)
//             })
//     }, [])