import styled from "styled-components";

export const StyledNav = styled.div`
  /* background-color: var(--grey-0);  */
  border-bottom: 1px solid var(--grey-3);
  width: 100vw;
  max-width: 100%;
  height: 4.5rem;
  align-items: center;
  display: flex;

  @media (max-width: 600px) {
    height: 8.688rem;
  }
`;
