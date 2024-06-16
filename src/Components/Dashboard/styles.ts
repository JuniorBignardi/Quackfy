import styled from "styled-components";

export const Container = styled.main`
    margin: 0 auto;
    padding: 0;
    width: 80vw;
    height: 70vh;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--card_width), 1fr));
    grid-auto-rows: var(--row_increment);

    grid-auto-flow: row dense;
    overflow-y: scroll;
    scroll-behavior: smooth;

    scrollbar-width: thin;
    scrollbar-color: var(--yellow) var(--background);
`;

export const Card_small = styled.article`
    padding: 0px;
    margin: 15px 10px;
    border-radius: var(--card_border_radius);
    background-color: var(--yellow);
    grid-row-end: span var(--card_small);
`;

export const Card_medium = styled.article`
    padding: 0px;
    margin: 15px 10px;
    border-radius: var(--card_border_radius);
    background-color: var(--yellow);
    grid-row-end: span var(--card_medium);

`;

export const Card_large = styled.article`
    padding: 0px;
    margin: 15px 10px;
    border-radius: var(--card_border_radius);
    background-color: var(--yellow);
    grid-row-end: span var(--card_large);
`;

export const Content = styled.div`
    display: grid;
    grid-template-rows: 70% 30%;
    height: 100%;

    img {
        padding: 5px;
        padding-bottom: 0;
        width: 100%;
        border-radius: 25px;
        max-height: 100%;
        position: absolute;
        object-fit: cover;
        height: 100%;
        
    }

    
    .box {
        position: relative;
        width: 100%;
        display: flex;
        height: 100%;
        align-items: flex-end;
        justify-content: center;
    }


    .titulo {
        font-size: 0,3rem;
        font-family: "Lexend", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
        color:white;
        z-index: 1;
        width: calc(100% - 10px);
        border-radius: 25px;

        background: rgba(0,0,0,0.67);
        padding: 2px;
        text-align: center;
        
        
    }

    .descricao{
        padding-left: 5px;
        font-size: 1.05rem;
        font-family: "Lexend", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
        color: var(--grey);
    }
`;