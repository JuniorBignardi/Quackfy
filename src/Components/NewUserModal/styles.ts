import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;

    form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    }

    h1{
        text-align: center;
        font-size: 1.2rem;
        font-family: "Lexend", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
        margin-bottom: 2rem;
    }
    
    p{
        text-align: center;
        font-size: 1.1rem;
        font-family: "Lexend", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;

    }

    label{
        font-size: 1.0rem;
        font-family: "Lexend", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }


    input{
        width: 380px;
        padding: 0 1.5rem;
        height: 2.2rem;
        background-color: #026351;
        border-color: transparent;

        &::placeholder {
            font-family: "Lexend", sans-serif;
            font-optical-sizing: auto;
            font-weight: 400;
            font-style: normal;
            color: #81B1A8;
        }
    }


    .entrar {
        background-color: var(--red);
        border-radius: 20px;
        width: 120px;
    }

    .google {
        background-color: transparent;
    }

    img{
        width: 60px;
        height: 60px;
    }

    .quackfy{
        position:absolute;
        margin-bottom: 510px;
        width: 100px;
        height: 100px;
    }
`;