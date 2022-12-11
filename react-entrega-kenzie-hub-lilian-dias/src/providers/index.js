import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserContext = createContext({ user: null });

export const Provider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("session");
      if (!token) {
        return;
      }

      try {
        setLoading(true);
        api.defaults.headers.common.authorization = `Bearer ${token}`;

        const { data } = await api.get("/profile");
        console.log("effect", user);
        setUser(data);
      } catch (error) {
        console.error(error);
        localStorage.clear();
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  //função login//
  const navigate = useNavigate();
  const submit = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      window.localStorage.setItem("session", response.data?.token);

      navigate("/home");
    } catch (error) {
      toast("usuário ou senha inválidos", {
        type: "error",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  //função register//

  const submitRegister = async (data) => {
    try {
      await api.post("/users", data);

      toast("Registro efetuado com sucesso!", {
        type: "success",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/");
    } catch (error) {
      toast("Verifique os campos!", {
        type: "error",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <UserContext.Provider
      value={{ submit, navigate, submitRegister, user, loading, setLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};
