import styled, { css } from "styled-components";

export const Btn = styled.button`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.5rem;
  border: none;
  transition: 0.3s;
  ${({ btnColor }) => {
    switch (btnColor) {
      case "brand":
        return css`
          color: var(--white);
          background-color: var(--color-primary);
          transition: 0.3s;
          &:hover {
            background-color: var(--color-primary-focus);
            transition: 0.3s;
          }
        `;
      case "grey":
        return css`
          color: var(--white);
          background-color: var(--grey-1);
          transition: 0.3s;
          &:hover {
            color: var(--white);
            background-color: var(--grey-2);
            transition: 0.3s;
          }
        `;
      case "negative":
        return css`
          color: var(--white);
          background-color: var(--color-primary-negative);
          transition: 0.3s;
        `;
      default:
        console.log("error");
    }
  }};
  ${({ btnSize }) => {
    switch (btnSize) {
      case "medium":
        return css`
          /* height: 2.5rem; */
          padding: 1rem 0.094rem;
          text-align: center;
        `;
      default:
        return css`
          /* height: 3.75rem; */
          padding: 0.625rem 1.375rem;
        `;
    }
  }};
`;
