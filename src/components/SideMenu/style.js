import styled from "styled-components";

export const SideMenuContainer = styled.aside`
  height: 100%;
  min-width: 20rem;
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  padding: 2rem 2rem;
  border: 1px solid var(--light-grey);

  div {
    margin-bottom: 1rem;
    h2 {
      font-size: 1.6rem;
      color: var(--light-grey);
      font-weight: 300;
      margin-bottom: 0.5rem;
    }
    label {
      margin: 0 0 0.5rem 1rem;
      font-size: 1.4rem;
      font-weight: 300;
    }
  }
  @media only screen and (max-width: 850px) {
    display: none;
  }
`;
