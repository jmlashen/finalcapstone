//Author: Jake, Purpose: To format the way the weather will show on the DOM

import React, { useEffect, useState } from "react";
import { getWeather } from "./moduels/EventManager";
import { useHistory } from "react-router";
import { GetUser } from "./components/nav/GetUser";
import "./styles/custom.scss"


export const WeatherCard = () => {
    const [weather, setWeather] = useState([])

    const history = useHistory()

    const getEventWeather = () => {
        return getWeather().then(response => {
            setWeather(response)
        })


    }

    const handleCancelButton = () => {
        history.push("/events")
    }


    useEffect(() => {
        getEventWeather()
    }, [])

    return (
        <>
            {/* <button className="weather-cancel-button"
                onClick={handleCancelButton}>
                Go Back
            </button> */}


            {weather.main &&
                <>
                    <div className="weather-card">
                    
                                {/* <GetUser /> */}
                            
                        <p>{weather.weather[0].description}{Math.round(weather.main.temp)}°</p>
                       
                        
                        </div>
                       
                        {/* <div className="icon">
                            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                           
                        </div> */}
                    

                </>
            }



        </>
    )
}
