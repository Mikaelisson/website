import { useState } from "react";

import {
  BorderEffect,
  ButtonsForm,
  FormLogin,
  InputFileGroup,
  InputGroup,
  SelectGroup,
} from "../../../admin/AdminStyled";
import { Overlap } from "./AddProjectStyled";

const addProject = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputComments, setInputComments] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [inputRepository, setInputRepository] = useState("");
  const [inputImage, setInputImage] = useState("");

  //add new project
  const addProject = async () => {
    if (!inputImage) alert("Campo de imagem vazio!");

    if (
      inputTitle &&
      inputDescription &&
      inputComments &&
      inputUrl &&
      inputImage
    ) {
      props.changeLoading();

      const data = await fetch("/admin/add/project", {
        method: "POST",
        body: new FormData(document.getElementById("formAddProject")),
      });
      await data.json();

      props.onSetShowAddProject();
      props.consultProjects();
    }
  };

  const saveValue = (value, setValue) => {
    setValue(value);
  };

  return (
    <Overlap>
      <BorderEffect>
        <FormLogin
          id="formAddProject"
          onSubmit={(event) => {
            event.preventDefault();
          }}
          encType="multipart/form-data"
        >
          <h1>Novo Projeto</h1>

          <InputGroup title={inputTitle}>
            <input
              type="text"
              name="title"
              value={inputTitle}
              onChange={(event) => {
                saveValue(event.target.value, setInputTitle);
              }}
              required
            />
            <label htmlFor="title">Título</label>
          </InputGroup>

          <InputGroup description={inputDescription}>
            <input
              type="text"
              name="description"
              value={inputDescription}
              onChange={(event) => {
                saveValue(event.target.value, setInputDescription);
              }}
              required
            />
            <label htmlFor="description">Descrição</label>
          </InputGroup>

          <InputGroup comments={inputComments}>
            <input
              type="text"
              name="comments"
              value={inputComments}
              onChange={(event) => {
                saveValue(event.target.value, setInputComments);
              }}
              required
            />
            <label htmlFor="description">Comentários</label>
          </InputGroup>

          <InputGroup url={inputUrl}>
            <input
              type="text"
              name="url"
              value={inputUrl}
              onChange={(event) => {
                saveValue(event.target.value, setInputUrl);
              }}
              required
            />
            <label htmlFor="url">Url</label>
          </InputGroup>

          <InputGroup repository={inputRepository}>
            <input
              type="text"
              name="repository"
              value={inputRepository}
              onChange={(event) => {
                saveValue(event.target.value, setInputRepository);
              }}
              required
            />
            <label htmlFor="repository">Repositório</label>
          </InputGroup>

          <SelectGroup>
            Suporte Mobile?
            <select name="mobileSupport" form="formAddProject" required>
              <option disabled>Suporte Mobile</option>
              <option value={true}>Sim</option>
              <option value={false}>Não</option>
            </select>
          </SelectGroup>

          <InputFileGroup inputImage={inputImage}>
            <label htmlFor="image">
              {inputImage ? (
                <div>{inputImage}</div>
              ) : (
                <div>Escolher arquivo</div>
              )}
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                onChange={(event) =>
                  saveValue(event.target.files[0].name, setInputImage)
                }
              />
            </label>
          </InputFileGroup>

          <ButtonsForm>
            <button type="button" onClick={() => props.onSetShowAddProject()}>
              Cancelar
            </button>
            <button onClick={() => addProject()}>Adicionar</button>
          </ButtonsForm>
        </FormLogin>
      </BorderEffect>
    </Overlap>
  );
};

export default addProject;
