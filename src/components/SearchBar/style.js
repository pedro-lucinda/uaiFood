import styled from "styled-components";

export const SearchBarContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-beetween;

  margin: 2rem 0 0 0;

  input {
    width: 55rem;
    height: 5rem;

    outline: none;
    border: 0.5px solid var(--light-grey);
    padding: 0 2rem;

    font-size: 18pt;
    color: var(--grey);
  }

  @media only screen and (max-width: 700px) {
    input {
      width: 70vw;
      font-size: 16pt;
    }
  }
`;
