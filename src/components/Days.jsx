import React from 'react';
import './Days.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { colorsDays } from './weatherConfig';

export default function Days({days}) {
  
  const getFormattedDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses comienzan desde 0, sumamos 1 padStart(). Toma dos argumentos: El primer argumento, 2, especifica la longitud deseada de la cadena. En este caso, queremos que el mes tenga dos dígitos. El segundo argumento, '0', especifica el carácter que se debe agregar a la izquierda de la cadena si es necesario. En este caso, queremos agregar ceros.
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  
  const getDayOfWeek = (dateString) => {
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const date = new Date(dateString);
    const dayOfWeekIndex = date.getDay();
    return daysOfWeek[dayOfWeekIndex];
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='days'>
      <Carousel 
      responsive={responsive}
      draggable={true}
      swipeable={true}
      showDots = { true } 
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={3000}
      className={days.length < 3 ? 'carousel' : ''}
      >
      {days.map((item, index) => (
        <div key={index} className='days-cards' style={{ backgroundColor: colorsDays // es un array porque uso .map, almacenando el color que coincida con el case dado por icon.img
        }}>
          <p 
          className={item.description === 'lluvia de gran intensidad' || 
          item.description === 'tormenta con lluvia ligera' || 
          item.description === 'tormenta con llovizna ligera' || 
          item.description === 'tormenta con llovizna intensa' || 
          item.description === 'llovizna de intensidad ligera' ||
          item.description === 'llovizna de intensidad ligera' ||
          item.description === 'llovizna de gran intensidad' || 
          item.description ==='lluvia de intensidad de luz'
          ? 'word-large' 
          : 'desc'}
          >{item.description}</p>
          <p className='dayOfWeek'>{getDayOfWeek(item.date)}</p>
          <p className='date'>{getFormattedDate(item.date)}</p>
          <img className="iconoClima" src={`//openweathermap.org/img/wn/${item.icon}@2x.png`} alt='weather' />
          <p className='temp'>{item.temp}°C</p>
          <p className='hour'>{item.hour}</p>
        </div>
      ))}
      </Carousel>
    </div>
  );
}