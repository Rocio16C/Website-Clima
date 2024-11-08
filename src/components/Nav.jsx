import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import clima from '../images/clima.png'
import { styled } from '@mui/system';
import { colorsDays } from './weatherConfig.jsx';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth.js';
import dayjs from 'dayjs';
import 'dayjs/locale/es.js';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import updateLocale from 'dayjs/plugin/updateLocale.js';

dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
  weekStart: 1,
});

dayjs.locale('es')

function Nav({onSearch, onDateChange, availableDates, cities, setCities, setDays, setNavColor, disabledChange}) {

  const [value, setValue] = React.useState(dayjs());
  const [calendarOpen, setCalendarOpen] = React.useState(false);

  const handleOnClick = () => {
    if(cities.length > 0){
     setCalendarOpen(!calendarOpen);
    }
  };

  const handleCalendarChange = (newValue) => {
    setValue(newValue);
    setCalendarOpen(false);
    const date = newValue.format('YYYY-MM-DD');
    onDateChange(date);
  };

  const shouldDisableDate = (date) => {
    const dateString = dayjs(date).format('YYYY-MM-DD');
    return !availableDates.includes(dateString);
  };

  const StyledDateCalendar = styled(DateCalendar)(({ theme }) => ({
    position: 'absolute !important',
    left: '77%',
    margin: '20px auto !important',
    '& .Mui-selected': {
      backgroundColor: cities.length > 0 ? `${colorsDays} !important` : '',
    }
  }));


  return (
    <div>
    <nav className="navbar">
        <SearchBar
          className="search"
          onSearch={onSearch}
          cities={cities}
          setCities={setCities}
          setDays={setDays}
          setNavColor={setNavColor}
          disabledChange={disabledChange}
          setCalendarOpen={setCalendarOpen}
        />

      <a href='/' className="navbar-brand" style={{ textDecoration: 'none', color: 'black' }}>
        <img id="logoClima" src={clima} width="55" height="55" className="d-inline-block align-top" alt="RC" />
        Henry - Weather App
      </a>

      <CalendarMonthIcon className={`calendarIcon ${cities.length === 0 ? 'disabled' : ''}`} onClick={handleOnClick} style={{ cursor: 'pointer', color: cities.length > 0 ? colorsDays : ''}}/>
    </nav>

{calendarOpen && (
      <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StyledDateCalendar
          className='calendar'
          value={value} 
          onChange={handleCalendarChange}
          shouldDisableDate={shouldDisableDate}
          style={{ textTransform: 'capitalize' }}
          />
    </LocalizationProvider>
    </div>
   )}
   </div>
  );
};

export default Nav;
