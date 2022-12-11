import React from "react";
import { Text } from "../../styles/tipography";
import { Btn } from "../../styles/buttons/buttons";
import { StyledForm } from "../../styles/form/form";
import { LogoStyled } from "../../styles/logo";
import logo from "../../assets/logo.svg";
import { Input } from "../../components/input";
import { TextStyled } from "../../styles/tipography/Text";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import { loginSchema } from "./schema";
import { StyledLink } from "../../styles/link/link";
import { UserContext } from "../../providers";
import { useContext } from "react";

export const LoginPage = () => {
  const { submit } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

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
