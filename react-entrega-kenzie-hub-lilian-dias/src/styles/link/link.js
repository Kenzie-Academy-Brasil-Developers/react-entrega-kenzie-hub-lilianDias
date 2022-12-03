import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.5rem;
  border: none;
  transition: 0.3s;
  color: var(--white);
  background-color: var(--grey-1);
  padding: 0.625rem 1.375rem;
  &:hover {
    color: var(--white);
    background-color: var(--grey-2);
    transition: 0.3s;
  }
`;
