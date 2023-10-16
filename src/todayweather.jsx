import React from "react";

import { DAYS,MONTHS } from "./constants";

const TodayWeather = ({city}) =>{
    return (
        <section className='container mx-auto flex flex-col-reverse items-center md:flex-row align-top justify-between pt-10'>
            <div className="text-center md:pt-5">
            <img src={`https://openweathermap.org/img/wn/${city.list[0].weather[0].icon}@2x.png`} alt="" />
                <h3 className="italic font-semibold text-red-500 text-lg">{city.list[0].weather[0].description}</h3>
                <p className="italic">{city.list[0].wind.speed} km/h</p>
            </div>
            <div className="text-center py-5 md:py-0">
                <h3 className="text-xl font-semibold ">{DAYS[new Date(city.list[0].dt_txt).getDay()]} {new Date(city.list[0].dt_txt).getDate()} {MONTHS[new Date(city.list[0].dt_txt).getMonth() -1]} {city.list[0].dt_txt.slice(11,-3)}</h3>
                <h1 className='text-[3.5rem] text-amber-700 font-extrabold md:text-[4.5rem] md:py-5'>{city.list[0].main.temp}&deg;C</h1>
                <h3 className="text-lg italic text-slate-500 md:pt-8">Feels like {city.list[0].main.feels_like}&deg;C</h3>
            </div>
            <div className="text-center md:pt-5">
                <h1 className="text-[1.5rem] text-red-500 font-bold tracking-wider">{city.city.name}</h1>
                <p className="italic leading-8 pt-4">Humidity : {city.list[0].main.humidity}</p>
                <p className="italic leading-8">Preassure : {city.list[0].main.pressure}</p>
                <p className="italic leading-8">Sea level : {city.list[0].main.sea_level}</p>
            </div>
        </section>
    );
}

export default TodayWeather;