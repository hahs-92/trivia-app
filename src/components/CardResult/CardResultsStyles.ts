import styled from "styled-components";
//global variables
import { GlobalVariables } from '../../styles/GlobalStyles'

export const CardWrapper = styled.article `
        display: grid;
        grid-template: 2fr 2fr 1fr / 1fr;
        height: 100%;

        .CardResults-image, .CardResults-button {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 50%;
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