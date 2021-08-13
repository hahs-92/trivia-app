import styled from "styled-components";
//global variables
import { GlobalVariables } from '../../styles/GlobalStyles'

export const CardStartWrapper = styled.article `
    display: grid;
    grid-template: 120px 2fr 1fr / 1fr;
    width: 100%;
    height: 100%;

    .CardStart-image {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        img {
            width: 50%;
            height: 50%;
        }
    }

    .CardStart-difficulty {
        ul {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
            height: 100%;

            li {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 50px;
                list-style: none;
                border: 1px solid ${GlobalVariables.black};
                border-radius: 12px;
                font-size: 1.8rem;
                color: ${ GlobalVariables.black };
                cursor: pointer;

                :hover {
                    background-color: ${ GlobalVariables.blue};
                    color: ${ GlobalVariables.white };
                }
            }

            .select {
                background-color: ${GlobalVariables.blue };
                color: ${GlobalVariables.white};
            }
        }

    }

    .CardStart-button {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`