import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";   
export default function SearchBox({ updateInfo}) {

let [city, setCity] = useState("");
let [error, setError] = useState("");

const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const API_KEY = "5c39d00b6b8a1c56174e4db6c0884d7a"

let getWeatherInfo = async () =>{
try{
   let  response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

  let jsonResponse =  await response.json();
  let  result = {
    city: jsonResponse.name,
    temperature: jsonResponse.main.temp,
    humidity: jsonResponse.main.humidity,
    tempMin : jsonResponse.main.temp_min,
    tempMax : jsonResponse.main.temp_max,
    feelsLike: jsonResponse.main.feels_like,
    Weather : jsonResponse.weather[0].description,
    icon: jsonResponse.weather[0].icon,

  };
  console.log(result);
  return result;
}catch(err){
    console.error("Error fetching weather data:", err);
    setError("Failed to fetch weather data. Please try again.");
    return {
      city: "Unknown",
      temperature: 0,
      humidity: 0,
      tempMin: 0,
      tempMax: 0,
      feelsLike: 0,
      Weather: "Unknown",
    };
}
};






    let handleChange = (event) =>{
        setCity(event.target.value);

    };

    let handleSubmit = async (event) =>{
       try{
        event.preventDefault();
        console.log(city);
        // Here you can add the logic to fetch weather data based on the city
        setCity(""); // Clear the input field after submission

       let newInfo = await getWeatherInfo();
       updateInfo(newInfo);
       }catch(err){
        console.error("Error in handleSubmit:", err);
        setError("An error occurred while fetching the weather data.");
       }
    };

    return(

     <div className="Search-Box">
                
      <h3>Search for the Weather !</h3>
 <form onSubmit ={handleSubmit}>
     <TextField 
         id="city" 
        label="City Name"
         variant="outlined"
          required 
          value={city}
         onChange={handleChange}/>
     <br/>
     <br/>

    <Button variant="contained" type ="submit">Search</Button>
                </form>
        </div>
    );
}

