import styled from "styled-components";
//variables Globales
import { GlobalVariables } from '../../styles/GlobalStyles'

//props
type ItemProps = {
    correct: boolean,
    isClicked: boolean,
    active: boolean
}

export const ItemWrapper = styled.li<ItemProps> `
    display: flex;
    width: 100%;
    height: max-content;
    min-height: 40px;
    border-radius: 10px;
    background-color: ${({correct, isClicked}) => 
        correct
            ? GlobalVariables.success
            : !correct && isClicked
            ? GlobalVariables.error
            :'transparent'
    };
    border: ${({correct, isClicked}) => 
        correct
            ?  `1px solid ${GlobalVariables.success}`
            : !correct && isClicked
            ? `1px solid ${GlobalVariables.error}`
            : `1px solid ${GlobalVariables.blue}`
    };
    color: ${({isClicked}) => 
        !isClicked
            ? GlobalVariables.blue
            : GlobalVariables.white
    };
    list-style: none;
    cursor: pointer;

    :hover {
        background-color: ${({active, correct}) => 
            !active 
                ? GlobalVariables.orange
                : correct
                ? GlobalVariables.success
                : GlobalVariables.error
                
        };
        color: white;
      
    } 
   
    .Item-index {
        align-self: center;
        justify-self: center;
        display: flex;
        justify-content: center;
        width: 20%;
    }

    .Item-answer {
        display: flex;
        align-items: center;
        width: 70%;
    }

`
