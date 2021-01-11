import styled from "styled-components";

export const Logo = styled.img`
  height: 7rem;
  position: relative;
  bottom: 5rem;
`;
export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  img {
    margin-top: 25vh;
  }

  @media only screen and (max-width: 700px) {
    h1 {
      text-align: center;
      font-size: 2.8rem;
      max-width: 90vw;
    }
  }
`;
