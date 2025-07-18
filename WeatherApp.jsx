import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { useState } from "react";
import "./WeatherApp.css";
export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState({

        city: "New York",
        temperature: 22,   
        humidity: 60,
        tempMin: 18, 
        tempMax: 26,
        feelsLike: 21,      
        Weather: "Clear sky",  

    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div className="app-background" style={{textAlign:"center"}}>
            <div className="weather-app-content">
            <h2>Weather App graminTechie !</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info ={weatherInfo}/>
        </div>
        </div>
    );
}