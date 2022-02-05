import React, { useState } from 'react';
import { useStopwatch } from 'react-timer-hook';
import "./styles/timer.css"



export const Stopwatch = ({setStartTime, setEndTime}) => {
   
   
    
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: false });


    const handleStart = () => {
        start()
        setStartTime(Date.now())

    }

    const handleStop = () => {
        pause()
        setEndTime(Date.now())
    } 

   
    const handleReset = () => {
        reset()
        handleStop()
      
    }

    return (

        <>
        
        <div className='stopwatch-container'>
        <h2></h2>
        <div className='stopwatch'>
            <div className='stopwatch-time'>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
        </div>
        <p>{isRunning ? 'Drill in progress' : 'Drill stopped'}</p>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleStop}>Stop</button>
        </div>
        
        
        </>


    );
}

