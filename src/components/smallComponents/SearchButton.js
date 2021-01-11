import styled from "styled-components";

export const SearchButton = styled.button`
  width: 15rem;
  height: 5rem;
  padding: 1rem;

  color: var(--white);
  background-color: var(--main-green);

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;

  font-size: 18pt;
  color: var(--white);
  font-weight: 600;

  &:hover {
    background: #2b8a38;
    transform: scale(0.99, 0.99);
    transition: ease-in 0.2s;
  }

  @media only screen and (max-width: 700px) {
    width: 20vw;
    font-size: 12pt;
  
  }
`;
