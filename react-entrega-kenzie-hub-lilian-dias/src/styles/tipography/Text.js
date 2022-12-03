import styled, { css } from "styled-components";
import { Text } from ".";

export const TextStyled = styled(Text)`
  ${({ fontSize }) => {
    switch (fontSize) {
      case "title-1":
        return css`
          font-weight: 700;
          font-size: 1.125rem;
        `;
      case "title-2":
        return css`
          font-weight: 600;
          font-size: 1rem;
        `;
      case "title-3":
        return css`
          font-weight: 700;
          font-size: 0.875rem;
        `;
      case "headline":
        return css`
          font-weight: 400;
          font-size: 0.75rem;
        `;
      case "headline-bold":
        return css`
          font-weight: 600;
          font-size: 0.875rem;
        `;
      case "headline-italic":
        return css`
          font-weight: 400;
          font-size: 0.75rem;
        `;
      default:
        console.log("error");
    }
  }};
  ${({ color }) => {
    switch (color) {
      case "primary":
        return css`
          color: var(--color-primary);
        `;
      case "grey-1":
        return css`
          color: var(--grey-1);
        `;
      case "grey-0":
        return css`
          color: var(--grey-0);
        `;
      case "white":
        return css`
          color: var(--white);
        `;
      default:
        return css`
          color: var(--grey-1);
        `;
    }
  }}
`;
