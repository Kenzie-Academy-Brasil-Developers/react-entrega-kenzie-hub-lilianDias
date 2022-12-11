import React from "react";
import { TextStyled } from "../../styles/tipography/Text";
import { StyledDivCard } from "./cards";
import { UserTech } from "../../providers/userTech";
import { useContext } from "react";

export const Card = ({ title, status, id }) => {
  const { setShowDetails, setTechIdEdit } = useContext(UserTech);

  return (
    <StyledDivCard
      onClick={() => {
        setTechIdEdit(id);
        setShowDetails(true);
      }}
    >
      <TextStyled tag="span" fontSize="title-3" color="grey-0">
        {title}
      </TextStyled>
      <TextStyled tag="span" fontSize="headline" color="grey-1">
        {status}
      </TextStyled>
    </StyledDivCard>
  );
};
