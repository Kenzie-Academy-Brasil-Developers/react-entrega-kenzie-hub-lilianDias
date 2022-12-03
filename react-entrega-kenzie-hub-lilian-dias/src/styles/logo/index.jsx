import React from "react";
import { LogoStyled } from ".";
import logo from "../../assets/logo.svg";

export const Logo = () => {
  return (
    <LogoStyled>
      <img src={logo} alt="logo Kenzie hub" />
    </LogoStyled>
  );
};
