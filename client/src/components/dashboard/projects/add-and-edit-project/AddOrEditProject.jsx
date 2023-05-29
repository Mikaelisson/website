import { useEffect } from "react";
import { useState } from "react";

import {
  BorderEffect,
  ButtonsForm,
  FormLogin,
  InputFileGroup,
  InputGroup,
  SelectGroup,
} from "../../../admin/AdminStyled";
import { Overlap } from "./AddOrEditProjectStyled";

const AddOrEditProject = (props) => {
  const [ID, setID] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputComments, setInputComments] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [inputRepository, setInputRepository] = useState("");
  const [inputImage, setInputImage] = useState("");
  const [mobileSupport, setMobileSupport] = useState("");
  const [email, setEmail] = useState(props.email);

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
        body: new FormData(document.getElementById("formProject")),
      });
      await data.json();

      props.showAddOrEditProject();
      props.consultProjects();
    }
  };

  //save edited project
  const saveEditProject = async (element) => {
    if (inputTitle && inputDescription && inputComments && inputUrl) {
      props.changeLoading();

      const data = await fetch(`/admin/edit/project/${element[0].id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: inputTitle,
          description: inputDescription,
          comments: inputComments,
          url: inputUrl,
          repository: inputRepository,
          mobileSupport: mobileSupport,
          email: props.email,
        }),
      });
      await data.json();

      props.showAddOrEditProject();
      props.consultProjects();
    }
  };

  if (props.dataEdit) {
    useEffect(() => {
      const {
        _id,
        title,
        description,
        comments,
        url,
        repository,
        image,
        mobileSupport,
      } = props.dataEdit[0];

      saveValue(title, setInputTitle);
      saveValue(description, setInputDescription);
      saveValue(comments, setInputComments);
      saveValue(url, setInputUrl);
      saveValue(repository, setInputRepository);
      saveValue(_id, setID);
      saveValue(mobileSupport, setMobileSupport);
    }, [props.dataEdit]);
  }

  const saveValue = (value, setValue) => {
    setValue(value);
  };

  return (
    <Overlap
      id="overlap"
      onClick={(e) => {
        const id = e.target.id;
        if (id === "overlap") props.showAddOrEditProject();
      }}
    >
      <BorderEffect className="borderEffect">
        <FormLogin
          id="formProject"
          onSubmit={(event) => {
            event.preventDefault();
          }}
          encType="multipart/form-data"
        >
          <h1>{props.title}</h1>

          <InputGroup title={inputTitle}>
            <input
              type="text"
              name="title"
              id="title"
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
              id="description"
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
              id="comments"
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
              id="url"
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
              id="repository"
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
            <select
              name="mobileSupport"
              form="formProject"
              onChange={(e) => saveValue(e.target.value, setMobileSupport)}
              required
            >
              <option value={mobileSupport}>Padrão</option>

              <option value={true}>Sim</option>

              <option value={false}>Não</option>
            </select>
          </SelectGroup>

          {props.uploadImage && (
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
                  required
                  accept="image/*"
                  onChange={(event) => {
                    saveValue(event.target.files[0].name, setInputImage);
                  }}
                />
              </label>
            </InputFileGroup>
          )}

          <input
            type="text"
            name="email"
            onChange={() => setEmail(props.email)}
            value={email}
            hidden
          />

          <ButtonsForm>
            <button type="button" onClick={() => props.showAddOrEditProject()}>
              Cancelar
            </button>
            <button
              onClick={() =>
                props.title == "Editar Projeto"
                  ? saveEditProject([
                      {
                        id: ID,
                        title: inputTitle,
                        description: inputDescription,
                        comments: inputComments,
                        url: inputUrl,
                        repository: inputRepository,
                      },
                    ])
                  : addProject()
              }
            >
              Salvar
            </button>
          </ButtonsForm>
        </FormLogin>
      </BorderEffect>
    </Overlap>
  );
};

export default AddOrEditProject;
