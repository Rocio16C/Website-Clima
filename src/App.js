import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import { fetchCity, fetchClimas, fetchGeo} from './services/fetchCity.js';
import Days from './components/Days.jsx';
import { translateCity } from './services/translateService.js';
import { colorCard } from './components/weatherConfig.jsx';
import { Loader } from './components/Loader.jsx';

function App() {
  const [cities, setCities] = useState([]);
  const [days, setDays] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [availableDates, setAvailableDates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [cityGeo, setCityGeo] = useState('');
  const [disabledChange, setDisabledChange] = useState(true);

  //const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      setLatitude(lat);
      setLongitude(lon);
    }, error => {
      console.error('Error getting geolocation:', error);
    }, {
      //timeout: 5000,
      maximumAge: 0
    });
  }, []);

  React.useEffect(() => {
    if (latitude && longitude) {
      fetchGeo(latitude, longitude, setCityGeo);
    }
  }, [latitude, longitude]);

  React.useEffect(() => {
    const fetchCityData = async () => {
      if (cityGeo) {
        setLoading(true);
        try {
          const translated = await translateCity(cityGeo);
          await Promise.allSettled([
            fetchCity(translated, setCities),
            fetchClimas(translated, setDays, selectedDate, setAvailableDates),
            //delay(3000) // Asegurar que el loading dure al menos 3 segundos
          ]);
        } catch (error) {
          console.error('Error al traducir la ciudad:', error);
        } finally {
          setLoading(false);
          setDisabledChange(false);
        }
      }
    };
    if (cityGeo) {
      const timeGeo = setTimeout(() => {
        fetchCityData();
      }, 4100);

      return () => clearTimeout(timeGeo);
    }
  }, [cityGeo]);



  async function onSearch(ciudad) {
    setLoading(true);
    try {
      const translated = await translateCity(ciudad);
      await Promise.allSettled([
        fetchCity(translated, setCities),
        fetchClimas(translated, setDays, selectedDate, setAvailableDates),
        //delay(3000) // Asegurar que el loading dure al menos 3 segundos
      ]);
    } catch (error) {
      console.error('Error al traducir la ciudad:', error);
    } finally {
      setLoading(false);
    }
  }

  function onDateChange(date) {
    setSelectedDate(date);
    if (cities.length > 0) {
      const ciudad = cities[0].name;
      fetchClimas(ciudad, setDays, date, setAvailableDates); //actualiza los datos del clima inmediatamente cuando el usuario selecciona una nueva fecha, incluso si no se ha realizado una nueva búsqueda de ciudad. Esto se logra llamando a fetchClimas con la ciudad actual (si ya hay una en cities) y la nueva fecha seleccionada. Si no se hiciera esto, los datos del clima no se actualizarían hasta que se realizara una nueva búsqueda de ciudad
    }
  }

  return (
    <div>
      <div className='container' style={{backgroundColor: navColor ? 'transparent' : colorCard}}>
        <Nav 
        onSearch={onSearch} 
        onDateChange={onDateChange} 
        availableDates={availableDates} 
        cities={cities} 
        setCities={setCities} 
        setDays={setDays}
        setNavColor={setNavColor}
        disabledChange={disabledChange}
        />
        {loading && <Loader />}
          <Cards cities={cities} />
       </div>

    {!loading && (
      <Days days={days} />
    )}
    </div>
  );
}

export default App;
