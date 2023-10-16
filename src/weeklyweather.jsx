import React from "react"

import { DAYS,MONTHS } from "./constants";

const WeeklyWeather = ({cityname}) =>{
    return (
        <div className='flex flex-col items-center justify-center'>
        <h1 className="text-red-500 font-semibold text-lg">{DAYS[new Date(cityname.dt_txt).getDay()]}</h1>
        <p className="font-semibold italic">{new Date(cityname.dt_txt).getDate()} {MONTHS[new Date(cityname.dt_txt).getMonth() -1]}</p>
        <p className="leading-8 text-slate-500">{cityname.main.temp}&deg;C</p>
        <img src={`https://openweathermap.org/img/wn/${cityname.weather[0].icon}@2x.png`} alt="" />
        </div>
    );
}

export default WeeklyWeather;