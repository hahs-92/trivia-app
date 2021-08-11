import styled from "styled-components";
//Global variables
import { GlobalVariables } from '../../styles/GlobalStyles'

//interfae
type ButtonProps = {
    visible: boolean
}

export const Wrapper = styled.article `
    justify-self: center;
    align-self: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 320px;
    max-height: 380px;
    background-color: ${ GlobalVariables.white };
    color: ${ GlobalVariables.black };
    border-radius: 12px;

    ul {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-between;
        width: 90%;
        height: 80%;
    }

` 
export const WrapperButton = styled.section<ButtonProps> `
    display: flex;
    justify-content: flex-end;
    width: 90%;
    height: 40px;

    button {
        width: 90px;
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