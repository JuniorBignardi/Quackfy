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
  width: 100vw;
`;

export const Content = styled.div`
  width: 90vw;
  max-width: 900px;
  height: 75vh;
  background-color: #00967b;
  border-radius: 60px;
  padding: 20px;
  box-sizing: border-box;

  .user_ranking {
    height: 12vh;
    background-color: #001511;
    border-radius: 30px 30px 30px 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 120px;
    font-size: 1rem;
  }

  .userprofilepic {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .filters {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }

  button {
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
      filter: brightness(0.9);
    }
  }

  .others_ranking {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.otheruser_ranking {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 120px;
font-size: 1rem;
}
    .otherprofilepic {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    .otherdetails {
      display: flex;
      flex-direction: row;
      gap: 180px;

      .other_position {
        margin-top: 10px;
      }

      .username {
        margin-top: 10px;
      }
    }

    .otherusername {
      width: 100px;
    }
  }

  @media (min-width: 768px) {
    .userdetails {
      gap: 100px;
    }

    .filters {
      gap: 100px;
    }

    .otheruser_ranking {
      gap: 300px;
    }

    .otherdetails {
      gap: 250px;
    }
  }
`;
