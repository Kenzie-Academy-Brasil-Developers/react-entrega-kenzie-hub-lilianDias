import React from "react";
import { Text } from "../../styles/tipography";
import { Btn } from "../../styles/buttons/buttons";
import { StyledForm } from "../../styles/form/form";
import { Link, useNavigate } from "react-router-dom";
import { LogoStyled } from "../../styles/logo";
import logo from "../../assets/logo.svg";
import { Input } from "../../components/input";
import { TextStyled } from "../../styles/tipography/Text";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { loginSchema } from "./schema";
import { StyledLink } from "../../styles/link/link";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();
  const submit = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      window.localStorage.setItem("session", JSON.stringify(response.data));

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

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <LogoStyled>
        <img src={logo} alt="" />
      </LogoStyled>
      <StyledForm onSubmit={handleSubmit(submit)} noValidate>
        <div>
          <TextStyled tag="span" fontSize="title-1" color="grey-0">
            Login
          </TextStyled>
        </div>
        <Input
          type="text"
          id="email"
          label="Email "
          placeholder="Digite aqui seu email"
          register={register("email")}
        />
        {errors.email?.message && (
          <TextStyled tag="span" fontSize="headline-bold" color="white">
            {errors.email.message}
          </TextStyled>
        )}

        <Input
          type="password"
          id="password"
          label="Senha "
          placeholder="Digite a sua senha"
          register={register("password")}
        />
        {errors.password?.message && (
          <TextStyled tag="span" fontSize="headline-bold" color="white">
            {errors.password.message}
          </TextStyled>
        )}

        <Btn btnColor="brand">Entrar</Btn>
        <div>
          <Text>Ainda não possui uma conta?</Text>
        </div>
        <TextStyled tag="span">Ainda não possui conta?</TextStyled>

        <StyledLink to={"./register"}>Cadastre-se</StyledLink>
      </StyledForm>
    </>
  );
};
