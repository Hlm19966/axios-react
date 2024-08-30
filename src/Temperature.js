import React, { useState } from "react";
import axios from "axios";
import { Audio } from 'react-loader-spinner';


export default function Temperature(props) {
   const [temperature, setTemperature]= useState(null);
   function handleTemperature(response) {
    setTemperature(Math.round(response.data.temperature.current));
   }



    let apiKey = "4c05132bc5ac2f372o09eet8a2bb888d";
    let apiUrl =  `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleTemperature);
    if (temperature !== null) {
      return(
        <h1>The temperature in {props.city} is {temperature}°C</h1>
    );
} else {
    return (
      <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
    );
}
    }
   