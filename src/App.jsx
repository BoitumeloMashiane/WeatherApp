import { useEffect, useState } from 'react'
import './App.css'

import WeeklyWeather from './weeklyweather';
import TodayWeather from './todayweather';

const API_URL = 'http://api.openweathermap.org/data/2.5/forecast?=&appid=81c6adb9901e737585d9280aace6a2aa&units=metric';

const App = () =>{

  const [city, setCity] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(()=>{
    searchCity('Centurion');
  },[]);

  const searchCity = async (cityname) =>{
    const response = await fetch(`${API_URL}&q=${cityname}`);
    const data = await response.json();
    setCity(data);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    searchCity(searchTerm);
  };

    return (
      <div className='h-screen'>
        <form onSubmit={handleSubmit} className='container mx-auto relative'>
          <span className=" absolute w-6 bottom-2 left-2">
            <img src="icons8-search.svg" alt="" />
          </span>
          <input className="placeholder:italic mt-10 placeholder:text-slate-400 bg-white w-full border-b-2 border-slate-300 py-2 pl-11 pr-3 shadow-sm focus:outline-none focus:border-red-500 focus:bg-white sm:text-sm" placeholder="Search for a city..." type="text" name="search" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
        </form>
        {city!=null && city.cod == 200
          ?(
            <>
              <TodayWeather city={city}/>
              <section className='container mx-auto flex flex-row justify-between h-1/3 mt-2 md:mt-24 border-solid border-y-2 border-slate-100'>
                <WeeklyWeather cityname={city.list[0]}/>
                <WeeklyWeather cityname={city.list[8]}/>
                <WeeklyWeather cityname={city.list[16]}/>
                <WeeklyWeather cityname={city.list[24]}/>
                <WeeklyWeather cityname={city.list[32]}/>
              </section>
            </>
          ):(
            <>
              <h1 className='text-center italic text-[3.5rem] text-amber-700 pt-24'>City Not Found!</h1>
            </>
          )}
      </div>
    )

}

export default App
