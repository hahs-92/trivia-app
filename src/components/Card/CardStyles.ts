import styled from "styled-components";
//Global variables
import { GlobalVariables } from '../../styles/GlobalStyles'

export const CardWrapper = styled.article `
    justify-self: center;
    align-self: center;
    display: grid;
    grid-template: 50px 50px minmax(420px, auto) / minmax(320px, 420px);
    color: ${ GlobalVariables.black };

    .Card-BG {
        grid-area: 2 / 1 / 4 / 2;
        background-color: ${ GlobalVariables.white};
        border-radius: 12px;
    }

    .Card-imagen {
        width: 150px;
        grid-area: 1 / 1 / 3 / 2;
        justify-self: self-end;
        z-index: 1;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .Card-children {
        grid-area: 3 / 1 / 4 / 2;
        justify-self: center;
        align-self: center;
        width: 90%;
        height: 90%;
    }


`