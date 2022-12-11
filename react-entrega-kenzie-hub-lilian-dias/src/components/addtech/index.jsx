import React from "react";
import { UserTech } from "../../providers/userTech";
import { Btn } from "../../styles/buttons/buttons";
import { Container } from "../../styles/container";
import { TextStyled } from "../../styles/tipography/Text";
import { AddTechDiv } from "./addtech";
import { useContext } from "react";

export const Addtech = () => {
  const { setShow } = useContext(UserTech);
  const handleEvent = () => {
    setShow(true);
  };
  return (
    <Container>
      <AddTechDiv>
        <TextStyled tag="span" fontSize="title-2" color="grey-0">
          Tecnologias
        </TextStyled>
        <Btn btnColor="grey" btnSize="icon" onClick={handleEvent}>
          +
        </Btn>
      </AddTechDiv>
    </Container>
  );
};
