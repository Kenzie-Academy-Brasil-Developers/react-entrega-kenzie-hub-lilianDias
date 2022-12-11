import { createContext, useEffect, useState } from "react";
import { api } from "../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserTech = createContext({});

export const ProviderTech = ({ children }) => {
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [techIdEdit, setTechIdEdit] = useState("");

  const [tech, setTech] = useState([]);
  useEffect(() => {
    const loadTech = async () => {
      await renderTech();
    };
    loadTech();
  }, []);

  const submitTech = async (data) => {
    try {
      const token = localStorage.getItem("session");
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      await api.post("/users/techs", data);
      await renderTech();
      setShow(false);
    } catch (error) {
      console.error("submitTech", error);
      toast("Essa tecnologia já está cadastrada", {
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

  const deleteTech = async (id) => {
    try {
      await api.delete("/users/techs/" + id);
      setShowDetails(false);
      await renderTech();
    } catch (error) {
      console.error(error);
    }
  };

  const editTech = async (data) => {
    try {
      await api.put("/users/techs/" + techIdEdit, { status: data.status });
      setShowDetails(false);
      await renderTech();
    } catch (error) {
      console.error(error);
    }
  };

  const renderTech = async () => {
    const token = localStorage.getItem("session");
    if (!token) {
      return;
    }

    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      const { data } = await api.get("/profile");

      setTech(data?.techs);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserTech.Provider
      value={{
        submitTech,
        deleteTech,
        editTech,
        setShow,
        setShowDetails,
        show,
        showDetails,
        tech,
        techIdEdit,
        setTechIdEdit,
      }}
    >
      {children}
      <ToastContainer />
    </UserTech.Provider>
  );
};
