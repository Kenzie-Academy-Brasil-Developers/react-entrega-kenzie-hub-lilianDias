import { Nav } from "../../components/nav";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const closeSession = () => {
    window.localStorage.clear();
    navigate("/");
  };

  const session = window.localStorage.getItem("session");
  const user = JSON.parse(session);

  return (
    <>
      <Nav children={"Sair"} onclick={closeSession} />
      <Header name={user.user.name} course_module={user.user.course_module} />
    </>
  );
};
