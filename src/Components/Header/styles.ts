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


    .dropdown{
        position: relative;
        display: inline-block;

    
    
    .dropdown-content {
        display: none;
        position: absolute;
        border: 0;
        background: none;
        color: black;
        border-radius: 0;
        min-width: 80px;
        z-index: 1;
    }

    .dropdown-content button{
        padding: 12px 16px;
        display: block;
    }


        &:hover .dropdown-content {
            display: block;
        }
    }
    
    .desktop{

    @media (max-width: 720px){
        display: none;
    }

    }

    .mobile{
        display: none;

        @media (max-width: 720px){
            display: block;
        }
    }

    .criarQuiz {
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
        margin-right: 1rem;

        &:hover {
            filter: brightness(0.9)
        }

    }

    .right {
        display: flex;
        align-items: center;
        gap: 30px;
    }
    
    .profile {
        margin-top: 6px;
        width: 48px;
        height: 48px;
        border-radius: 50%;;
    }

    progress {
        width: 50px;
    }
    
`;