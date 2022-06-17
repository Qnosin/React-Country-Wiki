import styled from 'styled-components';
import Header from '../Header';

const HeaderStyled = styled(Header)`
    width:100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 10vh;
    background-color: ${(props) => props.backgroundColor};
    color: ${props=> props.color};
    -webkit-box-shadow: 2px 5px 17px -3px rgba(66, 68, 90, 1);
    -moz-box-shadow: 2px 5px 17px -3px rgba(66, 68, 90, 1);
    box-shadow: 2px 5px 17px -3px rgba(66, 68, 90, 1);

    & h1{
        font-size: .8rem;
    }
    & button{
        padding: .5rem;
        border: none;
        background-color: transparent;
        color: ${props=> props.color};
        font-weight: 800;
        cursor: pointer;
    }
`;

export default HeaderStyled;