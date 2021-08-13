import styled from "styled-components";
//global variables
import { GlobalVariables } from "../../styles/GlobalStyles";

export const ButtonStyles = styled.button `   
    width: 120px;
    height: 40px;
    border: 2px solid ${ GlobalVariables.black };
    border-radius: 12px;
    color: ${ GlobalVariables.black};
    background-color: transparent;
    font-size: 1.6rem;
    cursor: pointer;   
       
` 

interface PropsButtonAction {
    isDisable?: boolean | undefined
}

export const ButtonActionStyles = styled(ButtonStyles)<PropsButtonAction> `
    border: none;
    background-color: ${GlobalVariables.orange};
    color: ${ GlobalVariables.white };

    visibility: ${({isDisable}) => 
        isDisable
            ? 'hidden'
            : 'visible'
    };
`