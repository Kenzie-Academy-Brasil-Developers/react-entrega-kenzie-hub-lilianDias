import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;

  @media (max-width: 600px) {
    width: 70%;
  }
  /* ${({ jContent }) => {
    return css`
      justify-content: space-between;
    `;
  }} */
  ${({ jContent }) => {
    switch (jContent) {
      case "space-between":
        return css`
          justify-content: space-between;
        `;
      case "space-around":
        return css`
          justify-content: space-around;
        `;
      default:
        console.log("error");
    }
  }}
`;
