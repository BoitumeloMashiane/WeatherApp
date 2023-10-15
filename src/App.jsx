import { useEffect, useState } from 'react'
import './App.css'

import WeeklyWeather from './weeklyweather';
import { DAYS,MONTHS } from "./constants";
import TodayWeather from './todayweather';

const API_URL = 'http://api.openweathermap.org/data/2.5/forecast?=&appid=81c6adb9901e737585d9280aace6a2aa&units=metric';

const App = () =>{

  const [city, setCity] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(()=>{
    searchCity('Siyabuswa');
  },[]);

  const searchCity = async (cityname) =>{
    const response = await fetch(`${API_URL}&q=${cityname}`);
    const data = await response.json();
    setCity(data);
  }

    return (
      <>
      <div className='container mx-auto relative'>
        <span className=" absolute w-6 bottom-2 left-2">
          <img src="img/icons8-search.svg" alt="" />
        </span>
        <input className="placeholder:italic mt-10 placeholder:text-slate-400 bg-white w-full border-b-2 border-slate-300 py-2 pl-11 pr-3 shadow-sm focus:outline-none focus:border-sky-500 sm:text-sm" placeholder="Search for a city..." type="text" name="search" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
        <button className='absolute bg-yellow-600 bottom-0 right-0 rounded-sm py-2 px-4 text-white font-bold hover:bg-yellow-500' onClick={()=>searchCity(searchTerm)}>Search</button>
      </div>
      {city!=null && city.cod == 200
        ?(
          <>
            <TodayWeather city={city}/>
            <section className='container mx-auto flex flex-row justify-between'>
              <WeeklyWeather cityname={city.list[0]}/>
              <WeeklyWeather cityname={city.list[8]}/>
              <WeeklyWeather cityname={city.list[16]}/>
              <WeeklyWeather cityname={city.list[24]}/>
              <WeeklyWeather cityname={city.list[32]}/>
            </section>
          </>
        ):(
          <>
            <h1>City Not Found</h1>
          </>
        )}
      </>
    )

}

export default App
