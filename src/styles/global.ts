import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #00342A;
    --yellow: #F2CB05;
    --red: #F23030;
    --green_nav: #003C31;
    --search: #556D52;
    --card_width: 250px;
    --card_border_radius: 16px;
    --row_increment: 10px;
    --card_small: 26;
    --card_medium: 39;
    --card_large: 45;
    --grey: #393434;
    --correct: #31E077;
    --incorrect: #F23030;
}   

* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        --webkit-font-smoothing: antialiased;
        display: block;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    
    .react-modal-overlay{
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content:center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background:#02735E;
        padding: 2.5rem;
        position: relative;
        border-radius: 25px;
    }
    

    .react-modal-overlay-cards{
        background: rgba(0,0,0,0.8);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content:center;
    }

    .react-modal-content-cards{
        width: 100%;
        max-width: 576px;
        padding: 2.5rem;
        position: relative;
        border-radius: 25px;
    }
`