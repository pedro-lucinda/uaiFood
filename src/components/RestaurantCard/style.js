import styled from "styled-components";

export const RestaurantCardContainer = styled.div`
  width: 40rem;
  height: 34rem;
  margin: 0 1.5rem 2rem 1.5rem;
  overflow: hidden;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.02, 1.02);
    box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: ease-in-out 0.2s;
  }

  img {
    width: 100%;
    height: 19rem;
  }

  article {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    section {
      h2 {
        font-size: 1.8rem;
        font-weight: 600;
      }

      p {
        font-size: 1.4rem;
        font-weight: 300;
        color: var(--off-grey);
      }

      h3 {
        svg {
          fill: var(--main-green);
          width: 1.4rem;
          height: 1.4rem;
        }
        p {
          font-size: 1.2rem;
          color: var(--off-grey);
        }
      }
    }
  }

  @media only screen and (max-width: 1100px) {
    width: 30rem;
    height: 100%;
  }
`;

export const ResCardBottomBar = styled.section`
  width: 100%;
  display: flex;
  justify-content: left;
  margin-top: 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: left;
  }
`;
