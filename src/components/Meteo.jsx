import React, { useState } from "react"

const Meteo = () => {
    let [responseObj, setResponseObj] = useState([])

    const getForecast = () => {
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Abidjan", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "90e2d5700bmsh7f0a63998e53962p1f78fbjsnb75d33eecd5a",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(response => setResponseObj(response))
        .catch(err => {
            console.error(err);
        });
    }

    return (
        <div>
            <h2>La meteo à Abidjan</h2>
            <div>
                {JSON.stringify(responseObj)}
            </div>
            <button onClick={getForecast}>Obtenir la meteo</button>
            <h1>{} </h1>
        </div>
    )
}

export default Meteo