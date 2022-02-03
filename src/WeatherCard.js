//Author: Jake, Purpose: To format the way the weather will show on the DOM

import React, { useEffect, useState } from "react";
import { getWeather } from "./moduels/EventManager";
import { useHistory } from "react-router";



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
            <section className="weather">
                <h3>Weather</h3>
                {weather.main &&
                    <>
                        <span>Temp: {Math.round(weather.main.temp)}</span>
                        <p>{weather.weather[0].description}</p>
                        <div className="icon">
                            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                        </div>

                    </>
                }

            </section>
        </>
    )
}
