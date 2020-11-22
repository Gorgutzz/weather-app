import React from 'react';
const Forecast = () => {
   function getForecast() {
     fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Seattle"
     	}
     })
     .then(response => {
     	console.log(response);
     })
     .catch(err => {
     	console.error(err);
     });
   }
   return (
     <div>
        <h2>Find Current Weather Conditions</h2>
        <div>
            {JSON.stringify(responseObj)}
        </div>
        <button onClick={getForecast}>Get Forecast</button>
    </div>
   )
}
export default Forecast;
