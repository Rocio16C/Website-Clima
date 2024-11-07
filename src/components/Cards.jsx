import React from 'react';
import './Cards.css';
import Card from './Card.jsx';
import { configureWeather } from './weatherConfig.jsx';

export default function Cards({cities}) {

  cities.forEach(city => {
    configureWeather(city.img);
  });

  return (
    <div className='cards'>
      {cities.map(c => <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          weather={c.weather}
          country={c.country}
          wind={c.wind}
          pressure={c.pressure}
          clouds={c.clouds}
          latitud={c.latitud}
          longitud={c.longitud}
          description={c.description}
          temperatura={c.temperatura}
          humedad={c.humedad}
          img={c.img}
          id={c.id}
        /> )}
    </div>
  );
}
