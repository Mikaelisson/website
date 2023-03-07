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
  return (
    <Overlap>
      <BorderEffect>
        <ContainerEditImage>
          <h1>Editar Imagem</h1>

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
                onChange={(event) => setInputImage(event.target.files[0].name)}
              />
            </label>
          </InputFileGroup>

          <ButtonsForm>
            <button
              type="button"
              onClick={() => {
                props.editImage();
              }}
            >
              Cancelar
            </button>
            <button onClick={() => {}}>Salvar</button>
          </ButtonsForm>
        </ContainerEditImage>
      </BorderEffect>
    </Overlap>
  );
};

export default EditImage;
