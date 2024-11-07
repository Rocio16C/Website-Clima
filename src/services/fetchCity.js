import { translateName, cleanText} from "./translateService";

export async function fetchCity (ciudad, setCities){

  const apiKey = 'c6e6ea38f2b1c7d8b4bcfdd4ba93ea43';

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&timezone=28800&lang=es`);
      const recurso = await response.json();
      
        if(recurso.main !== undefined){
          const translatedName = await translateName(recurso.name);
          const cleanName = cleanText(translatedName)

          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.visibility,
            pressure: recurso.main.pressure,
            humedad: recurso.main.humidity,
            temperatura: Math.round(recurso.main.temp),
            name: cleanName,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            country: recurso.sys.country,
            description: recurso.weather[0].description,
          };
        setCities([ciudad]); // Actualiza el estado con la nueva ciudad
      } else {
        alert('Ciudad no encontrada');
      }
    } catch (error) {
      console.error('Error al obtener los datos de la ciudad:', error);
    }
  }


export function fetchClimas (ciudad, setDays, date, setAvailableDates){

  const apiKey = 'c6e6ea38f2b1c7d8b4bcfdd4ba93ea43';

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=${apiKey}&units=metric&lang=sp`)
      .then(p => p.json())
      .then((producto) => {
        if(producto.list !== undefined){
          const dateSelected = date || producto.list[0].dt_txt.split(' ')[0];
          const fiveDaysWeather = producto.list.filter(forecast => {
            const forecastDate = forecast.dt_txt.split(' ')[0];
            return forecastDate === dateSelected
          });

          
          if(fiveDaysWeather.length > 0){
            const climas = fiveDaysWeather.map(d => ({
                description: d.weather[0].description,
                date: d.dt_txt,
                icon: d.weather[0].icon,
                temp: Math.round(d.main.temp),
                hour: d.dt_txt.split(' ')[1].slice(0, 5)

            }));
            setDays(climas);
          } 
          const filterDates = new Set(producto.list.map(forecast => forecast.dt_txt.split(' ')[0]))
          const dates = Array.from(filterDates);
          setAvailableDates(dates);
        }
      });
    }


    export function fetchGeo (latitude, longitude, setCityGeo){

      const apiKey = 'c6e6ea38f2b1c7d8b4bcfdd4ba93ea43';
    
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=sp`)
      .then(g => g.json())
      .then((location) => {
        if(location && location.name) {
          setCityGeo(location.name)
        } else {
          console.error('No location name found for the given coordinates');
        }
      })
        .catch(error => {
          console.error('Error fetching geolocation:', error);
      });
    }