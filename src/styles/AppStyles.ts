import styled from "styled-components"
//assests
import BG from '../assets/images/background.png'
//interfaces
import { GlobalVariables } from '../styles/GlobalStyles'


export const AppWrapper = styled.section `
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template: 1fr 50px / 1fr;
    min-height: 100vh;
    background-image: url(${BG});
    background-size: cover;

    & .Footer {
        justify-self: center;
        align-self: center;
        color: ${ GlobalVariables.white};
    }
`