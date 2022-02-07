import React from "react";
import { WeatherCard } from "../../WeatherCard";
import { GetUser } from "../nav/GetUser"
export const Footer = () => {

    return (
        <>
             <div className="footer-content">
                    <p>
                       &copy; ZKHOOL by Jake Lashenik 2022
                    </p>
                </div>

            {/* <div>
                <WeatherCard />
            </div>

            <div className="get">
                <GetUser />
            </div> */}
        </>
    )
}