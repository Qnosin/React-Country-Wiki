import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios';
import { useContext } from 'react';
import { CountryContext } from '../helper/CountryContext';
import AOS from "aos";
import "aos/dist/aos.css";
function AppHead({className}) {
    const [country,setCountry] = useState([]);
    const {isAll,isFilter,isSearched} = useContext(CountryContext);
    const {filterValue} = useContext(CountryContext);
    let tab = []
    useEffect(()=>{
            AOS.init();
            AOS.refresh();
            axios.get(`https://restcountries.com/v3.1/all`).then((data)=>{
                        tab.push(data.data[0],data.data[2],data.data[10],data.data[4],data.data[6],data.data[10],data.data[15],data.data[20],data.data[26],data.data[9],data.data[12],data.data[20],data.data[21],data.data[22],data.data[23],data.data[24]);
                        setCountry(tab);
            })
    },[])
  return (
    <div className={className}>
        {country.map((data,index)=>{
            return(
                <section data-aos="fade-up" key={index}>
                         <img src={data.flags.svg}></img>
                         <div>
                             <h1>{data.name.common}</h1>
                             <p>Population: {data.population}</p>
                             <p>Region: {data.continents[0]}</p>
                             <p>Capital: {data.capital}</p>
                         </div>
                     </section>
            )
        })}
    </div>
  )
}

export default AppHead