import AppHead from "../AppHead";
import styled from "styled-components";

export const AppHeadStyled = styled(AppHead)`
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    @media screen and (min-width:1440px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 40px;
        width: 90%;
        max-width: 1440px;
    }
    
  & section img{
    max-width: 100%;
  }

  & section{
    min-height: 60vh;
    background-color: hsl(209,23%,22%);
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
    margin-bottom: 3rem;
    @media screen and (min-width:1440px){
       max-width: 400px;
       min-height: 40vh;
    }
  }
  & section:first-child{
    margin-top: 5rem;
    @media screen and (min-width:1440px){
        margin-top: 0px;
    }
  }
  & section div{
    color: white;
    text-align: left;
    width: 80%;
    margin: 0 auto;
    height: max-content;
    margin-top: 3rem;
    min-height: 20vh;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    p{
        font-weight: 600;
    }
    h1{
        font-size: 2rem;
    }
    @media screen and (min-width:1440px){
        margin: 2rem;
    }

  }
`