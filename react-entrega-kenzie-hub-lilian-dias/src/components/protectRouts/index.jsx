import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers";

export const ProtectedRoutes = () => {
  const { location } = useContext(UserContext);

  const token = localStorage.getItem("session");

  return token ? <Outlet /> : <Navigate to="/" state={{ from: location }} />;
};
