import React, { useState } from "react";
import axios from "axios";


export default function Weather(props) {
    const [temperature, setTemperature] = useState(null);
    function showTemperature(response){
        setTemperature(Math.round(response.data.temperature.current));
    }

    let apiKey = "4c05132bc5ac2f372o09eet8a2bb888d";
    let apiUrl =  `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=metric`;
     axios.get(apiUrl).then(showTemperature);
    if (temperature) {
        return (
            <p>The weather in {props.city} is {temperature}°c</p>
        );
    }
        else {
            return (
                "loading"
            );
        }
}

