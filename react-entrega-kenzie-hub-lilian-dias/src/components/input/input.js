import styled from "styled-components";
import { Input } from "./index";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;

  input {
    height: 3rem;
    padding: 0 1rem;
    border-radius: 4px;
    color: var(--grey-1);
    font-size: 1rem;
    font-weight: 400;
    width: 100%;
    background-color: var(--grey-2);
    border: none;
    transition: 0.3s;
  }

  label {
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--grey-0);
  }

  input:hover {
    outline: 1px solid var(--grey-0);
    transition: 0.3s;
  }

  select {
    height: 3rem;
    padding: 0 1rem;
    border-radius: 4px;
    color: var(--grey-1);
    font-size: 1rem;
    font-weight: 400;
    width: 100%;
    background-color: var(--grey-2);
    border: none;
    transition: 0.3s;
  }
`;
