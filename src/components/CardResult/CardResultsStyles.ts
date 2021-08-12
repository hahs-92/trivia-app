import styled from "styled-components";
//global variables
import { GlobalVariables } from '../../styles/GlobalStyles'

export const CardWrapper = styled.article `
        grid-template: 2fr 2fr 1fr / 1fr;
        display: grid;
        height: 100%;

        .CardResults-image, .CardResults-button {
            display: flex;
            justify-content: center;
            align-items: center;

            button {
                width: 120px;
                height: 40px;
                border: 2px solid ${ GlobalVariables.black };
                border-radius: 12px;
                color: ${ GlobalVariables.black};
                background-color: transparent;
                font-size: 1.6rem;
                cursor: pointer;
            }
        }

        .hightlight {
            color: ${ GlobalVariables.success };
            font-size: 2.8rem;
        }


        .CardResults-score {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }


`