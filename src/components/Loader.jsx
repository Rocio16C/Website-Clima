import React from 'react';
import './loader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons'


export function Loader (){

  return (
    <div className="loader">
      {[...Array(20)].map((_, index) => (
        <span key={index} style={{ '--i': index + 1 }}></span>
      ))}
      <div className='sun'>
        <FontAwesomeIcon className='icono' icon={faSun}/>
      </div>
    </div>
  );
}