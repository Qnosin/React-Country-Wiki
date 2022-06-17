import styled from "styled-components";
import Filter from "../Filter";

export const FilterStyled = styled(Filter)`
    width: 100%;
    min-height: 8vh;
    max-width: 1440px;
    margin: 0 auto;
    @media screen and (min-width:1440px) {
            min-height: 20vh;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 90%;
        }
    & form select{
        padding: 1rem;
        border-radius: 5px;
        border: none;
        background-color: hsl(209,23%,22%);
        color: white;
        outline: black;
        border-right: 16px solid transparent
    }
    & form{
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        @media screen and (min-width:1440px) {
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
        }
    }
    & input{
        width: 90%;
        margin: 0 auto;
        padding: 1rem;
        margin-top: 1rem;
        margin-bottom: 2rem;
        border-radius: 5px;
        color: white;
        background-color: hsl(209,23%,22%);
        padding-left: 50px;
        ::placeholder{
            color: white;
        }
        border: none;
        @media screen and (min-width:1440px) {
            margin: 0%;
            margin-bottom: 1rem;
        }
    }
    & form div{
        width:90%
    }
    & form div:first-child{
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        @media screen and (min-width:1440px) {
            justify-content: left;
            margin-top: 1rem;
        }
    }
    & form div:first-child img{
        position: absolute;
        top: 28%;
        left: 8%;
        width: 25px;
        @media screen and (min-width:634px) {
            left: 7%;
        }
        @media screen and (min-width:962px) {
            left: 6.5%;
        }
        @media screen and (min-width:1338px) {
            left: 6%;
        }
        @media screen and (min-width:1440px) {
            left: 2%;
            top: 15%;
        }
    }
    & form div:last-child{
        @media screen and (min-width:1440px) {
            display: flex;
            justify-content: right
            
        }
    }
`