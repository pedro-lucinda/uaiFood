import styled from "styled-components";

export const SearchResWrapper = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const SearchResContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;

  main {
    display: flex;
    align-items: center;
    justify-content: left;
    flex-wrap: wrap;

    width:90vw;
  }
  @media only screen and (max-width: 825px) {
    main {
      width: 100vw;
      justify-content: center;
    }
  }
`;
