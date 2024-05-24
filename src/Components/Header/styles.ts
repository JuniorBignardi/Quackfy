import styled from "styled-components";

export const Container = styled.header`
    background: var(--green_nav);
`;

export const Content = styled.div`
    max-width: 1620px;
    margin: 0 auto;
    display: flex;
    padding: 0 1rem;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        font-family: "Lexend", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        color: white;
        color: #FFF;
        background: var(--red);
        border: 0;
        border-radius: 60px;
        width: 120px;
        height: 40px;
        padding: 0;
        margin-right: 2rem;
        margin-left: 2.5rem;

        &:hover {
            filter: brightness(0.9)
        }

    }

    .left {
        display: flex;
        align-items: center;
    }
    
    .profile {
        margin-top: 6px;
        width: 48px;
        height: 48px;
        border-radius: 50%;;
    }
    
`;