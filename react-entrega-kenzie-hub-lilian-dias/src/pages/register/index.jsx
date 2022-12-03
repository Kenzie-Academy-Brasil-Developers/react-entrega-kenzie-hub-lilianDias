import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./Schema";
import { Input, Select } from "../../components/input";
import { Text } from "../../styles/tipography";
import { Nav } from "../../components/nav";
import { Btn } from "../../styles/buttons/buttons";
import { StyledForm } from "../../styles/form/form";
import { TextStyled } from "../../styles/tipography/Text";
import { DivTextFormStyled } from "./register";
import { NavLink } from "../../components/nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const navigate = useNavigate();
  const submit = async (data) => {
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
      <NavLink children={"Voltar"} to={"/"} />
      <StyledForm onSubmit={handleSubmit(submit)} noValidate>
        <DivTextFormStyled>
          <TextStyled tag="span" fontSize="title-1" color="grey-0">
            Crie sua conta
          </TextStyled>
          <TextStyled tag="span" fontSize="headline" color="grey-1">
            Rápido e grátis, vamos nessa
          </TextStyled>
        </DivTextFormStyled>
        <Input
          type="text"
          id="name"
          label="Nome "
          placeholder="Digite aqui seu nome"
          register={register("name")}
        />
        {errors.name?.message && (
          <TextStyled tag="span" fontSize="headline-bold" color="white">
            {errors.name.message}
          </TextStyled>
        )}

        <Input
          type="email"
          id="email"
          label="E-mail "
          placeholder="Digite o seu e-mail"
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
          placeholder="Crie a sua senha"
          register={register("password")}
        />
        {errors.password?.message && (
          <TextStyled tag="span" fontSize="headline-bold" color="white">
            {errors.password.message}
          </TextStyled>
        )}

        <Input
          type="Password"
          id="confirmPassword"
          label="Confirmar senha "
          placeholder="Confirme sua senha"
          register={register("confirmPassword")}
        />
        {errors.confirmPassword?.message && (
          <TextStyled tag="span" fontSize="headline-bold" color="white">
            {errors.confirmPassword.message}
          </TextStyled>
        )}

        <Input
          type="text"
          id="bio"
          label="Bio "
          placeholder="Fale de você"
          register={register("bio")}
        />
        {errors.bio?.message && (
          <TextStyled tag="span" fontSize="headline-bold" color="white">
            {errors.bio.message}
          </TextStyled>
        )}

        <Input
          type="text"
          id="contact"
          label="Contato"
          placeholder="Opção de contato"
          register={register("contact")}
        />
        {errors.contact?.message && (
          <TextStyled tag="span" fontSize="headline-bold" color="white">
            {errors.contact.message}
          </TextStyled>
        )}

        <Select
          id=""
          label="Selecionar módulo"
          register={register("course_module")}
          options={[
            {
              value: "Primeiro módulo",
              name: "Primeiro módulo",
            },
            {
              value: "Segundo módulo",
              name: "Segundo módulo",
            },
            {
              value: "Terceiro módulo",
              name: "Terceiro módulo",
            },
          ]}
        ></Select>

        <Btn type="submit" btnColor="negative">
          Cadastrar
        </Btn>
      </StyledForm>
    </>
  );
};
