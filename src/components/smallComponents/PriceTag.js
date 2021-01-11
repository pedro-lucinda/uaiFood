import styled from "styled-components";

export const PriceTag = styled.div`
  width: 10rem;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem 1rem;
	background: var(--main-green);
	margin-right: 1rem;

  svg {
    width: 2.4rem;
		fill: var(--white);
	
	}
	
  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--white);
  }
`;
