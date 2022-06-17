import Main from "../Main";
import styled from "styled-components";

export const MainStyled = styled(Main)`
    width: 100%;
    min-height: 90vh;
    background-color: ${(props) => props.backgroundColor};
`