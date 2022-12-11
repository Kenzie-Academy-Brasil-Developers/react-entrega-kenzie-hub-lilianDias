import styled from "styled-components";

export const ModalContainerBG = styled.div`
  background-color: rgba(18, 18, 20, 0.5);
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const FormModalHeaderStyled = styled.div`
  padding: 0.75rem 1.25rem;
  background-color: var(--grey-2);
  display: flex;
  height: 3.125rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;
export const ModalDivContainer = styled.div`
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
  width: 23rem;
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;
    gap: 1.625rem;
    padding: 0.75rem 1.25rem;
  }
`;

export const DivBtnModal = styled.div`
  display: flex;
  justify-content: space-between;
`;
