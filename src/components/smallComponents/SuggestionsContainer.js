import styled from "styled-components";

export const SuggestionsContainer = styled.div`
  width: 55rem;
  min-height: 10rem;
  max-height: 20rem;

  background: var(--white);


  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;

  overflow: auto;

  border: 0.5px solid var(--light-grey);
 

  @media only screen and (max-width: 700px) {
    width: 70vw;
  }
`;
