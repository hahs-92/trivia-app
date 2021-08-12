import styled from "styled-components";
//Global variables
import { GlobalVariables } from '../../styles/GlobalStyles'

//interfae
type ButtonProps = {
    visible: boolean
}

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
export const WrapperButton = styled.section<ButtonProps> `
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
        width: 90px;
        height: 40px;
        border: none;
        border-radius: 5px;
        background-color: ${ GlobalVariables.orange };
        color: ${ GlobalVariables.white };
        cursor: pointer;
        visibility: ${({visible: visibility}) => 
            visibility 
                ? 'visible'
                : 'hidden'
        };
    }
`