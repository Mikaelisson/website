import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html, body, #root{
    height: 100%;
}

body{
    font-size: 1rem;
    font-family: 'Lato', Arial, Helvetica, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;

    
::-webkit-scrollbar {
    width: 6px;
    background-color: #1f1d2a;
}

::-webkit-scrollbar-track {
    border: #3e3a6d solid 2px;
    border-radius: 50px;
}

::-webkit-scrollbar-thumb {
    background: #3e3a6d;
    border-radius: 50px;
}
}
`;
