import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        // Colors
        --primary-text-color: #202020;
        --secundary-text-color: #FFCB47;

        // Fonts
        --title-font: "Elsie Swash Caps", serif;
        --text-font: "Montserrat", sans-serif

    }
    body {
        font-family: var(--text-font);
    
       
    }
`