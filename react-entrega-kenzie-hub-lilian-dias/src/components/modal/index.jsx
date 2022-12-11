import { useForm } from "react-hook-form";
import { Btn } from "../../styles/buttons/buttons";
import { TextStyled } from "../../styles/tipography/Text";
import { Input, Select } from "../input";
import { DivBtnModal, ModalContainerBG, ModalDivContainer } from "./modal";
import { FormModalHeaderStyled } from "./modal";
import { useContext } from "react";
import { UserTech } from "../../providers/userTech";

export const ModalAddTech = () => {
  const { register, handleSubmit } = useForm({});
  const { submitTech, setShow, show } = useContext(UserTech);
  if (!show) {
    return null;
  }

  return (
    <ModalContainerBG>
      <ModalDivContainer>
        <FormModalHeaderStyled onSubmit={handleSubmit(submitTech)} noValidate>
          <TextStyled tag="span" fontSize="title-3" color="grey-0">
            Cadastrar tecnologia
          </TextStyled>
          <Btn type="button" btnSize="icon" onClick={() => setShow(false)}>
            x
          </Btn>
        </FormModalHeaderStyled>

        <form onSubmit={handleSubmit(submitTech)}>
          <Input
            type="text"
            id="Nome"
            label="Nome "
            placeholder="Cadastre tecnologia"
            register={register("title")}
          />

          <Select
            id=""
            label="Selecionar status"
            register={register("status")}
            options={[
              {
                value: "Iniciante",
                name: "Iniciante",
              },
              {
                value: "Intermediário",
                name: "Intermediário",
              },
              {
                value: "Avançado",
                name: "Avançado",
              },
            ]}
          ></Select>
          <Btn type="submit" btnColor="brand">
            Cadastrar tecnologia
          </Btn>
        </form>
      </ModalDivContainer>
    </ModalContainerBG>
  );
};

export const ModalTechDetails = () => {
  const {
    editTech,
    deleteTech,
    showDetails,
    setShowDetails,
    tech,
    techIdEdit,
  } = useContext(UserTech);

  const { register, handleSubmit } = useForm({});

  if (!showDetails) {
    return null;
  }

  const techFiltered = tech.find((t) => t.id === techIdEdit);
  return (
    <ModalContainerBG>
      <ModalDivContainer>
        <FormModalHeaderStyled onSubmit={handleSubmit(editTech)} noValidate>
          <TextStyled tag="span" fontSize="title-3" color="grey-0">
            Tecnologia detalhes
          </TextStyled>
          <Btn
            type="button"
            btnSize="icon"
            onClick={() => setShowDetails(false)}
          >
            x
          </Btn>
        </FormModalHeaderStyled>

        <form onSubmit={handleSubmit(editTech)}>
          <Input
            disabled={true}
            type="text"
            id="Nome do projeto"
            label="Nome do projeto"
            register={register("title", { value: techFiltered.title })}
          />
          <Select
            id=""
            label="Status"
            register={register("status")}
            options={[
              {
                value: "Iniciante",
                name: "Iniciante",
              },
              {
                value: "Intermediário",
                name: "Intermediário",
              },
              {
                value: "Avançado",
                name: "Avançado",
              },
            ]}
          ></Select>
          <DivBtnModal>
            <Btn type="submit" btnColor="negative">
              Salvar alterações
            </Btn>
            <Btn
              onClick={() => deleteTech(techIdEdit)}
              type="button"
              btnColor="grey"
            >
              Excluir
            </Btn>
          </DivBtnModal>
        </form>
      </ModalDivContainer>
    </ModalContainerBG>
  );
};
