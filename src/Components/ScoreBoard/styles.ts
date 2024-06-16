import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    font-size: 1rem;
    font-family: "Lexend", sans-serif;        
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    color: white;
    gap: 20px;

    h1 {
        font-size: 3.5rem;
    }

`;

export const Content = styled.div`
    
    width: 370px;
    height:290px;
    background-color: #F2CB05;
    border-radius:20px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        position: absolute;
        z-index:1;
        align-self:start;
        margin-right: 250px;
        width: 80px;
    }
`;

export const Selector = styled.button`
    width: 270px;
    height: 60px;;
    border-radius: 60px;
    font-size: 1.5rem;
    font-weight: 400;
    background-color: var(--red);
`;

export const Shadow = styled.main`
    width: 90%;
    height: 88%;
    background-color: #3A3B08;
    opacity: 0.70;
    border-radius:20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 2.5rem;
    align-items: center;
    justify-content: center;
    gap: 20px;
    
    .points{
        color: #1FFFD5;
    }
`;
