import React from "react";
import { Text } from "../../styles/tipography";
import { HeaderStyled } from "./Header";
import { Container } from "../../styles/container";
import { TextStyled } from "../../styles/tipography/Text";

export const Header = ({ name, course_module }) => {
  return (
    <HeaderStyled>
      <Container jContent="space-between">
        <TextStyled tag="span" fontSize="title-1" color="grey-0">
          Olá, {name}
        </TextStyled>
        <TextStyled tag="span" fontSize="headline-bold" color="grey-1">
          {course_module}
        </TextStyled>
      </Container>
    </HeaderStyled>
  );
};
