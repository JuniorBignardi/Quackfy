import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    
    text-align: left;
    background-color: #00221C;

    font-size: 2.0rem;
    font-family: "Lexend", sans-serif;        
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    color: white;
    
    width: 50vw;
    max-width: 50vw;
    min-height: 8vh;


    cursor: pointer;

        &.correct {
            background-color: var(--correct)
        }

        &.incorrect {
            background-color: var(--incorrect)
        }

    p {
        width: 100%;
        text-align: left;
        margin-top: 5px;
        margin-left: 20px;
        min-height: 8vh;
    }

`;