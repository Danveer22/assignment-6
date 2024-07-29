import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`



:root {

--color-white: hsl(0, 0%, 98%);
--color-grey: hsl(0, 0%, 41%);
--color-black: hsl(0, 0%, 8%);
--font-family: "Epilogue", sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: inherit;

    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    body {
        /* background-color: var(--color-white); */
        background-color: #eee;
        min-height: 100vh;
        font-family: var(--font-family);
      

      }

    a:link,
    a:visited {
        text-decoration: none;
        color: var(--color-grey);
        font-weight: 500;
       
      
    }
    a:hover,
    a:active {
        color: var(--color-black);
      
    }
}


`;

export default GlobalStyle;
