import styled from "styled-components";

export const SuggestionContainer = styled.div`
  width: 40rem;
  height: 4rem;

  display: flex;
  justify-content: left;

  padding: 0.5rem 2rem;

  h3 {
    margin-bottom: 2rem;
    &:hover {
      cursor: pointer;
      transform: scale(0.97, 0.99);
      transition: transform ease-in 0.2s;
    }
  }

  @media only screen and (max-width: 600px) {
    font-size: 12pt;
    width: 100%;
    height: 100%;
    
  }
`;
