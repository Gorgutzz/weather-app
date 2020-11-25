import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {

   let [responseObj, setResponseObj] = useState({});

   function getForecast() {
     fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Seattle", {
     	"method": "GET",
     	"headers": {
     		"x-rapidapi-key": "8e8228baa9msh389459f1ffc6789p1afc37jsn450d3afe7532",
     		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
     	}
     })
     .then(response => response.json())
     .then(response => {
         setResponseObj(response)
     })
     .catch(err => {
     	console.error(err);
     });
   }
   return (
     <div>
         <h2>Find Current Weather Conditions</h2>
         <button onClick={getForecast}>Get Forecast</button>
         <Conditions
             responseObj={responseObj}
             />
     </div>
   )
}
export default Forecast;
