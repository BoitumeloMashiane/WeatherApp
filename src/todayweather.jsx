import React from "react";

import { DAYS,MONTHS } from "./constants";

const TodayWeather = ({city}) =>{
    return (
      <article className="flex flex-col md:flex-row pl-10 mx-auto">
        <section className='md:w-1/2 flex flex-row items-center justify-between pt-10'>
          <div>
            <img src="img/icons8-cloud-100.png" alt="" className='w-20'/>
            <h3>{city.list[0].weather[0].description}</h3>
            <p>{city.list[0].wind.speed} km/h</p>
          </div>
          <div>
            <h3>{DAYS[new Date(city.list[0].dt_txt).getDay()]} {new Date(city.list[0].dt_txt).getDate()} {MONTHS[new Date(city.list[0].dt_txt).getMonth() -1]} {city.list[0].dt_txt.slice(11,-3)}</h3>
            <h1 className='text-[3rem] text-yellow-600 font-extrabold'>{city.list[0].main.temp}&deg;C</h1>
            <h3>Feels like {city.list[0].main.feels_like}&deg;C</h3>
          </div>
          <div>
            <h1>{city.city.name}</h1>
            <p>Humidity {city.list[0].main.humidity}</p>
            <p>Presuue {city.list[0].main.pressure}</p>
            <p>Sea level {city.list[0].main.sea_level}</p>
          </div>
        </section>
        <section className='md:w-1/2'>
          <h1 className=''>World</h1>
        </section>
      </article>
    );
}


export default TodayWeather;