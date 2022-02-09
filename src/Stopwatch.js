import React, { useState } from 'react';
import { useStopwatch } from 'react-timer-hook';
import "./styles/timer.css"
import "./styles/custom.scss"
import { Button } from 'react-bootstrap';



export const Stopwatch = ({ setStartTime, setEndTime }) => {



    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: false});


    const handleStart = () => {
        start()
        setStartTime(Date.now())

    }

    const handleStop = () => { 
        pause()
        setEndTime(Date.now())
    }


    const handleReset = () => {
        handleStop()
        reset(Date.now(), false)
        
    
        

    }

    return (

        <>

            <div className='stopwatch-container'>
                {/* <div className="start_drill">
            <h1>Start Drill</h1>
            
            </div> */}
                <div className='stopwatch'>
                    <div className='stopwatch-time'>
                        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
                    </div>

                </div>
                <div className="timer_note">
                {/* <p>(to time drill press START - to stop and log drill press STOP)</p> */}
                </div>
   
                <div className="drill_progress_contain">
                    <div className="drill_progress">
                        <p>{isRunning ? 'Drill in progress..' : 'Press Start to begin drill'}</p>
                    </div>
                </div>

                <div className="timer-buttons-container">
                    
                    <div className="start">
                        
                        <Button variant="success" onClick={handleStart}>Start</Button>
                    </div>
                    <div className="reset">
                        <Button variant="secondary" onClick={handleReset} onClick={handleReset}>Reset</Button>
                    </div>
                    <div className="stop">
                        <Button variant="danger" onClick={handleStop}>Stop</Button>
                    </div>
                </div>

                
            </div>


        </>


    );
}

