import styled from "styled-components";
//Global variables
import { GlobalVariables } from '../../styles/GlobalStyles'

export const Wrapper = styled.article `
    color: ${ GlobalVariables.black };
    display: grid;
    grid-template: 1fr 4fr 1fr / 1fr;
    height: 100%;
    width: 100%;

    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

` 
export const WrapperButton = styled.section `
    display: flex;
    justify-content: flex-end;
    align-items: center;

`