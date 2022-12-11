import { Nav } from "../../components/nav";
import { Header } from "../../components/Header";
import { Addtech } from "../../components/addtech";
import { StyledDivContainerCard } from "../../components/cards/cards";
import { Container } from "../../styles/container";
import { Card } from "../../components/cards";
import { ModalAddTech, ModalTechDetails } from "../../components/modal";
import { useContext } from "react";
import { UserContext } from "../../providers";
import { useState } from "react";
import { UserTech } from "../../providers/userTech";

export const HomePage = () => {
  const { user, navigate, loading } = useContext(UserContext);
  const { tech } = useContext(UserTech);

  const closeSession = () => {
    window.localStorage.clear();
    navigate("/");
  };
  console.log("home", user);
  // if (loading) return null;

  return user ? (
    <>
      <Nav children={"Sair"} onclick={closeSession} />
      <Header name={user.name} course_module={user.course_module} />
      <Addtech />
      <ModalAddTech />
      <ModalTechDetails />
      <Container>
        <StyledDivContainerCard>
          {tech &&
            tech.map((t) => {
              return (
                <Card id={t.id} key={t.id} title={t.title} status={t.status} />
              );
            })}
        </StyledDivContainerCard>
      </Container>
    </>
  ) : null;
};
