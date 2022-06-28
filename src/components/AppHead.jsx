import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios';
import { useContext } from 'react';
import { CountryContext } from '../helper/CountryContext';
import AOS from "aos";
import "aos/dist/aos.css";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';
function AppHead({className}) {
    const [country,setCountry] = useState([]);
    const [filterCountry,setFilterCountry] = useState([]);
    const {filterValue} = useContext(CountryContext);
    const [pageNumber,setPageNumber] = useState(0);


    const PerPage = 12;
    let pagesVisited = pageNumber * PerPage;
    useEffect(()=>{
            AOS.init();
            AOS.refresh();
            axios.get(`https://restcountries.com/v3.1/all`).then((data)=>{
                setCountry(data.data);
            })
    },[])

    useEffect(()=>{
            function getSearchedData(){
                    setFilterCountry(country.filter((country)=>{
                    return country.name.common.toLowerCase().includes(filterValue.toLowerCase());
                   }))
            }
            const myTimeOut = setTimeout(getSearchedData,500);
            return () =>{
             clearTimeout(myTimeOut);
            }
    },[filterValue])

  //Count pages and handle changes 
  let tabToLength = 0;
  if(filterCountry.length !== 0){
    tabToLength = filterCountry.length 
  }else{
    tabToLength = country.length
  }
  
  const pageCount = Math.ceil(tabToLength / PerPage) - 1;
  if(pageCount === 0){
    pagesVisited = 0;
  }
  const handlePageChange = (e,value) =>{
    setPageNumber(value);
  }
  return (
    <>
    <div className={className}>
        {filterCountry.length !== 0 ? filterCountry.slice(pagesVisited,pagesVisited + PerPage).map((data,index)=>{
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
        }):country.slice(pagesVisited,pagesVisited + PerPage).map((data,index)=>{
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
        }) }
    </div>
    <Grid sx={{pt:2,pb:2}} container justifyContent="center">
    <Stack spacing={2}>
            <Pagination onChange={handlePageChange} color='primary'  count={pageCount} />
    </Stack>
    </Grid>
    </>
  )
}

export default AppHead