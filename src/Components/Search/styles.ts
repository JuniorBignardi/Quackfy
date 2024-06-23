import styled from "styled-components";
import search from "/search.svg"


export const Container = styled.section`
    text-align: center;
    height: 20vh;
    

    input {
        margin-top: 80px;
        font-size: 1rem;
        font-family: "Lexend", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        color: white;
        background: url(${search}) no-repeat;
        background-color: var(--search);
        border-radius: 60px;
        border:0;
        text-align: center;
        width: 390px;
        height: 50px;
        padding-top: 2px;
        padding-left: 35px;
        background-position: 14px 5px;
        max-width: 1120px;

        &::placeholder {
            font-size: 1.2rem;
            font-family: "Lexend", sans-serif;
            font-optical-sizing: auto;
            font-weight: 400;
            font-style: normal;
            color: white;
        }

    }

`;