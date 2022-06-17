import React, { useEffect } from 'react'
import serchIconBlack from './image/icons8-search.svg';
import serchIconWhite from './image/iconmonstr-search-thin-240.png';
import { CountryContext } from '../helper/CountryContext';
import { useContext } from 'react';
function Filter({className}) {
    const {setFilterValue, setIsSearched,setIsAll} = useContext(CountryContext);

  const  handleInputChange = (e)=>{
    setFilterValue(e.target.value);
    setIsSearched(true);
    setIsAll(false);
  }

  return (
    <div className={className}>
        <form>
            <div>
                <img src={serchIconWhite}></img>
                <input onChange={handleInputChange} type='text' placeholder='Search for a country...'></input>
            </div>
            <div>
            <select>
                <option disabled selected hidden value="0">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            </div>
        </form>
    </div>
  )
}

export default Filter