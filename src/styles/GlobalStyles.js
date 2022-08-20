import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
    }
    body{
       
        font-size: 1.5rem;
        font-weight: 800;
        font-family: 'Merriweather', serif;
    }
    .Before{
        position: relative;
        padding-left: 3rem;
        &::before{
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            width: 35px;
            background-color: #395FF6;
            height:2px;
        }
    
    }
`;

export default GlobalStyle;
