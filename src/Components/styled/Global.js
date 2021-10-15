import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,*::before, *::after{
        box-sizing: border-box;
    }
    body{
        font-family: 'Poppins';
        font-size: clamp(0.75rem, 0.6520rem + 0.4480vw, 1.1rem);
        background: linear-gradient(289.6deg, #0C0C0C 0%, #2C4550 98.22%);
        color: #fff;
        padding: 0;
        margin: 0;
    }
    h2{
        font-size: 1.1rem;
        font-weight: 700;
    }
    p{
       line-height: 1.5;
       font-weight: 500
    };`;
export default GlobalStyles;
