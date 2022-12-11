import styled from "styled-components";

export const StyledDivCard = styled.div`
  height: 2.125rem;
  display: flex;
  padding: 0.75rem 0.75rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    background-color: var(--grey-2);
  }
`;

export const StyledDivContainerCard = styled.div`
  background-color: var(--grey-3);
  border-radius: 4px;
  padding: 1.375rem 1.188rem;
  width: 100%;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;
