import "./WeatherApp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Hubballi ",
    feelsLike: 28.56,
    humidity: 51,
    temp: 28.02,
    tempMax: 28.02,
    tempMin: 28.02,
    weather: "broken clouds",
  });


  let updateInfo = (newInfo) =>{
    setWeatherInfo(newInfo);
  }
  return (
    <div className="weatherApp">
      <h2> - Weather App by SuJAY - </h2>
      <SearchBox updateInfo ={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
