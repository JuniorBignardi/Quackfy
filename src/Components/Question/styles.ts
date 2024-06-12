import styled from "styled-components";

export const Container = styled.div`
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;

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
    
    }
    
    .options {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 25px;
    }


`;