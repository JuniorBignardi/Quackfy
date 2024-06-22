import styled from "styled-components";

export const Container = styled.div`
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;

    .question-number{
        align-self: start;
        margin-left: 370px;
        display: flex;
        flex-direction: row;
        gap: 9px;
    }

    .correct {
            background-color: var(--correct);
            color: white;
            
        }

    .incorrect {
            background-color: var(--incorrect);
            color: white;
        }

    .question-number {
        
    
        @media (max-width: 1080px){
            margin-left:0;
            align-self: center;
        }

        @media (max-width: 720px){
            margin-left:0;
            align-self: center;
        }
    }

    a {
        color: var(--yellow);
        display: inline-block;
        padding: 8px 15px;
        border-style: solid;
        border-radius: 25px;
        border-color: var(--yellow);
        font-family: "Lexend", sans-serif;        
        font-optical-sizing: auto;
        font-weight: 700;
        
    }

    question-number.a.correct{
        background-color: var(--correct)
        border-radius: 25px;
        border-color: var(--yellow)
    }
    
    question-number.a.incorrect{
        background-color: var(--incorrect)
        border-radius: 25px;
        border-color: var(--yellow)
    }


    .questao{
        text-align: center;
        
        
        background-color: #2C5951;
    
        font-size: 2.0rem;
        font-family: "Lexend", sans-serif;        
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        color: white;
        
        border-radius: 40px;
        width: 100%;
        max-width: 120vh;
        height: 20vh;
    
    
        p {
            text-align: center;
            margin-top: 10px;
            margin-left: 30px;
        }

        @media (max-width:720px){
            font-size:3vh;
        }
    
    }
    
    .options {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 25px;
    }


`;

export const Content = styled.div`

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