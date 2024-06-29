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
`;

export const Content = styled.div`
    width: 70vw;
    height: 75vh;
    background-color:#00967B;
    border-radius: 60px;

    .user_ranking{
        height: 12vh;
        background-color:#001511;
        border-radius: 30px 30px 30px 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 180px;
        font-size: 1.5rem
    }
        


    .userdetails{
        display: flex;
        flex-direction: row;
        gap: 50px;

        .username{
            margin-top: 10px;
        }
    }

    .userprofilepic{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .filters{
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 50px;
    }

    button{
        font-size: 1rem;
        font-family: "Lexend", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
        background: var(--yellow);
        color: black;
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


    .others_ranking{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
    }

    .otheruser_ranking{
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 200px;
        font-size: 1.3rem;


    .otherprofilepic{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    
    .otherdetails{
        display: flex;
        flex-direction: row;
        gap: 180px;

        .other_position{
            margin-top: 10px;
        }

        .username{
            margin-top: 10px;
        }
    }

    .otherusername{
        width: 100px;
    }
    }
`;