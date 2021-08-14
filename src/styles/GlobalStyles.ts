import { createGlobalStyle } from "styled-components";
//fonts
import Poppins from '../assets/fonts/poppins-v15-latin/poppins-v15-latin-regular.woff2'
import Poppins700 from '../assets/fonts/poppins-v15-latin/poppins-v15-latin-700.woff2'

//variables globales
export enum GlobalVariables {
    white = '#ffffff',
    black = '#2F527B',
    blue = '#6066d0d9',
    success = '#60BF88',
    error = '#EA8282',
    orange = '#F9A826'
  }

const GlobalStyles  = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @font-face {
        font-family: 'Roboto Condensed';
        src: url(${Poppins}) format('woff2'),
            url(${Poppins700}) format('woff2');
    }

    html {
        font-size: 62.5%;
        font-family: 'Poppins', sans-serif;
    }

    h1 {
        font-size: 3.6rem;
    }

    h2 {
        font-size: 1.8rem;
    }

    h4 {
        font-size: 1.4rem;
    }
`
export default GlobalStyles