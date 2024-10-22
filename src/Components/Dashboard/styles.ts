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