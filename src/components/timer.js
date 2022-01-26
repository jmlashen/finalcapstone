import React from 'react';
import { useStopwatch } from 'react-timer-hook';
import "../styles/timer.css"

export const MyStopwatch = () => {
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


    return (

        <>
        <div className='stopwatch-container'>
        <h1></h1>
        <h2></h2>
        <div className='stopwatch'>
            <div className='stopwatch-time'>
                <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
        </div>
        <p>{isRunning ? 'Drill in progress' : 'Drill stopped'}</p>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Stop</button>
        <button onClick={reset}>Reset</button>
        </div>
        
        
        </>







    );
}

