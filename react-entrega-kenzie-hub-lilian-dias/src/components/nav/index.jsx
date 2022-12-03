import React from "react";
import { Container } from "../../styles/container";
import { StyledNav } from "./nav";
import logo from "../../assets/logo.svg";
import { Btn } from "../../styles/buttons/buttons";
import { Link } from "react-router-dom";
import { StyledLink } from "../../styles/link/link";

export const Nav = ({ children, onclick }) => {
  return (
    <StyledNav>
      <Container jContent="space-between">
        <img src={logo} alt="Logo Kenzie Hub" />
        <Btn onClick={onclick} btnColor="grey">
          {children}
        </Btn>
      </Container>
    </StyledNav>
  );
};

export const NavLink = ({ children, andress }) => {
  return (
    <StyledNav>
      <Container jContent="space-between">
        <img src={logo} alt="Logo Kenzie Hub" />
        <StyledLink to="/">{children}</StyledLink>
      </Container>
    </StyledNav>
  );
};
