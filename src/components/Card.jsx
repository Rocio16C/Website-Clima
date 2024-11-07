import React from 'react';
import './Card.css';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import AirIcon from '@mui/icons-material/Air';
import Spline from '@splinetool/react-spline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh } from '@fortawesome/free-solid-svg-icons'
import { background, sceneUrl } from './weatherConfig';

export default function Card ({ 
  name, 
  wind, 
  description,
  temperatura,
  humedad,
  pressure,
  country,
  }) {
    //DESVANCER ELEMENTOS CON SCROLL

    /*React.useEffect(() => {
      const handleScroll = () => {
        const elementos = document.querySelectorAll('.temperatura, .descripcion, .humedad, .viento');
        const windowHeight = window.innerHeight;
  
        elementos.forEach(elemento => {
          const position = elemento.getBoundingClientRect().top;
          
          if (position < windowHeight * 0.5) { // Ajusta este valor para desvanecimiento temprano
            elemento.classList.add('hidden');
          } else {
            elemento.classList.remove('hidden');
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);*/
    
    React.useEffect(() => {
      document.body.style.backgroundColor = background;
  
      return () => {
        document.body.style.backgroundColor = ''; // Reset background color when unmounting
      };
    }, []);
    
    const windNumber = wind/1000
    const visibility = windNumber.toFixed(1)
    
    return (
      <div className="card">
  
        <div className="card-body">
            <h5 className="card-title">{name}, {country}</h5>
        <div>

      <div className='cardShadow'>
        <br></br>
         <Spline className="spline" scene={sceneUrl}/>

            <div className="temperatura">
              <p>{temperatura} °C</p>
            </div>

            <div className="descripcion">
              <p>{description}</p>
            </div>
      </div>

          <div className="row">
            <div className="humedad">
              <WaterDropOutlinedIcon className='iconHu'/>
              <p style={{ fontSize: '13.3px', fontWeight: '400' }} id='humedad1'>Humedad</p>
              <p style={{ marginTop: '60px'}} id='humedad2'>{humedad} %</p>
            </div>

            <div className="presion">
              <FontAwesomeIcon className='iconPre' icon={faTemperatureHigh}/>
              <p style={{ fontSize: '13.3px', fontWeight: '400' }} id='presion1'>Presión</p>
              <p style={{ marginTop: '60px'}} id='presion2'>{pressure} hPa</p>
            </div>

            <div className="viento">
              <AirIcon className='iconAir'/>
              <p style={{ fontSize: '13.3px', fontWeight: '400' }} id='viento1'>Viento</p>
              <p style={{ marginTop: '60px'}} id='viento2'>{visibility} km</p>
            </div>
          </div>

          </div>
        </div>
      </div>
    );
};
