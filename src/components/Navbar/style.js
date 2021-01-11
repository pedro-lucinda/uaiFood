import styled from "styled-components";

export const NavBarContainer = styled.form`
  width: 100vw;
  height: 10rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid var(--light-grey);
  margin-bottom: 1.4rem;

  img {
    width: 15rem;
    &:hover {
      cursor: pointer;
      transform: scale(0.98, 0.98);
      transition: transform ease-in 0.3;
    }
  }
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: 5rem;
    input {
      flex-grow: 1;
      
      height: 4rem;
      padding: 1rem;
      border: 1px solid var(--light-grey);
      outline: none;
    }
    button {
      width: 15rem;
      height: 4rem;
      padding: 1rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border: none;
      background-color: var(--main-green);
      color: var(--white);

      &:hover {
        background: #2b8a38;
        transform: scale(0.99, 0.99);
        transition: ease-in 0.2s;
      }
    }
  }
  @media only screen and (max-width: 700px) {
    width: 100vw;
    height: 100%;
    flex-direction: column;

    img {
      width: 10rem;
      margin-bottom: 1.2rem;
    }
    div {
      margin-left: 0;

      button {
        width: 10rem;
      }
    }
  }
`;
