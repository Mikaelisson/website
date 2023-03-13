import { useState } from "react";
import {
  BorderEffect,
  ButtonsForm,
  InputFileGroup,
} from "../../../admin/AdminStyled";
import { Overlap } from "./AddOrEditProjectStyled";
import { ContainerEditImage } from "./EditImageStyled";

const EditImage = (props) => {
  const [inputImage, setInputImage] = useState("");
  const [email, setEmail] = useState(props.email);

  const uploadImage = async () => {
    props.changeLoading();
    const data = await fetch(
      `/admin/edit/project/image/${props.imageEditingData._id}`,
      {
        method: "POST",
        body: new FormData(document.getElementById("formEditImageProject")),
      }
    );
    const doc = await data.json();
    console.log(doc);
    props.editImage();
    //added timeout to give time to upload the image
    setTimeout(() => {
      console.log("1s");
      props.consultProjects();
    }, 1000);
  };

  return (
    <Overlap>
      <BorderEffect>
        <ContainerEditImage>
          <h1>Editar Imagem</h1>

          <form
            id="formEditImageProject"
            onSubmit={(event) => {
              event.preventDefault();
            }}
            encType="multipart/form-data"
            style={{ width: "100%" }}
          >
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
                    setInputImage(event.target.files[0].name);
                  }}
                />
              </label>
            </InputFileGroup>
            <input
              type="text"
              name="email"
              onChange={() => setEmail(props.email)}
              value={email}
              hidden
            />
          </form>

          <ButtonsForm>
            <button type="button" onClick={() => props.editImage()}>
              Cancelar
            </button>
            <button
              onClick={() => {
                uploadImage();
              }}
            >
              Salvar
            </button>
          </ButtonsForm>
        </ContainerEditImage>
      </BorderEffect>
    </Overlap>
  );
};

export default EditImage;
