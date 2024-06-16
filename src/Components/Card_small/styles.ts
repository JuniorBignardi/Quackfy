import styled from "styled-components";

export const Container = styled.article`
    padding: 0px;
    width: 230px;
    height: 230px;
    margin: 15px 10px;
    border-radius: var(--card_border_radius);
    background-color: var(--yellow);
    grid-row-end: span var(--card_small);
`;