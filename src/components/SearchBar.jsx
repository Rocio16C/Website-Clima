import React, { useState, useEffect } from "react";
import './SearchBar.css'
import { background, colorsDays } from "./weatherConfig";

export default function SearchBar({onSearch, setCities, cities, setDays, setNavColor, disabledChange, setCalendarOpen}) {
  const [city, setCity] = useState("");
  const [placeH, setPlaceH] = useState("");


  useEffect(() => {
    const time = setTimeout(() => {
      setPlaceH("Buscar ciudad...")
    }, 4100);
    return () => {
      clearTimeout(time)
    };
  }, []);

  useEffect(() => {
    if (city) {
      const timer = setTimeout(() => {
        setCalendarOpen(false)
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCities([]);
      setDays([]);
      setNavColor(true);
    }
  }, [city, setCities, setDays, setNavColor, setCalendarOpen]);

  useEffect(() => {
    if(cities.length > 0){
      setNavColor(false);
    }
  }, [cities, setNavColor])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setCities([])
    setDays([])
    setNavColor(true)
    if (city.trim()) { //elimina espacios en blancos
      onSearch(city);
      setCity(city);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const handleClick = (event) => {
    handleSubmit(event);
  };


  return (
    <div id="search">
      <svg viewBox="0 0 420 60" xmlns="http://www.w3.org/2000/svg" style={{ color: cities.length > 0 ? background : '' }}>
        <rect className="bar" />
        
        <g className="magnifier" style={{ translate: city ? '300px' : '0px'}}>
          <circle className="glass" style={{ color: cities.length > 0 ? colorsDays : '' }}/>
          <line className="handle" x1="32" y1="32" x2="44" y2="44" style={{ color: cities.length > 0 ? colorsDays : '' }}></line>
        </g>

        <g className="sparks">
          <circle className="spark" />
          <circle className="spark" />
          <circle className="spark" />
        </g>
        <g className="burst pattern-one">
          <circle className="particle circle" />
          <path className="particle triangle" />
          <circle className="particle circle" />
          <path className="particle plus" />
          <rect className="particle rect" />
          <path className="particle triangle" />
        </g>
        <g className="burst pattern-two">
          <path className="particle plus" />
          <circle className="particle circle" />
          <path className="particle triangle" />
          <rect className="particle rect" />
          <circle className="particle circle" />
          <path className="particle plus" />
        </g>
        <g className="burst pattern-three">
          <circle className="particle circle" />
          <rect className="particle rect" />
          <path className="particle plus" />
          <path className="particle triangle" />
          <rect className="particle rect" />
          <path className="particle plus" />
        </g>
      </svg>
      <input 
      type="search" 
      placeholder={placeH}
      value={city}
      onChange={e => setCity(e.target.value)}
      onKeyDown={handleKeyPress}
      disabled={disabledChange}
      style={{ outlineColor: cities.length > 0 ? colorsDays : '', fontWeight: 'bold'}}
      />

      <button
        onClick={handleClick}
        className="circle-enviar"
        aria-label="Search"
      >
      </button>
    </div>
  );
};
