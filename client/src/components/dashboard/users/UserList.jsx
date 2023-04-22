import { Users } from "../menu/DashboardMenuStyled";

import { IoCloseSharp } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";
import { Overlap } from "../projects/add-and-edit-project/AddOrEditProjectStyled";
import { BorderEffect, ButtonsForm } from "../../admin/AdminStyled";

//user list
import { ContainerEditImage } from "../projects/add-and-edit-project/EditImageStyled";
import { ButtonProject, ContainerButtons } from "../../projects/ProjectStyled";

const UserList = (props) => {
  return (
    <Overlap>
      <BorderEffect>
        <ContainerEditImage>
          <h1>Lista de Usuários</h1>
          <Users>
            {props.users.map((user, index) => (
              <div key={index}>
                <p>{user.name}</p>
                <ContainerButtons>
                  <ButtonProject
                    widthElement={"20px"}
                    paddingElement={"0"}
                    buttonBgColor={"#8a8a8a"}
                    onClick={() => {}}
                  >
                    <AiFillEdit style={{ width: "15px" }} />
                  </ButtonProject>

                  <ButtonProject
                    widthElement={"20px"}
                    paddingElement={"0"}
                    buttonBgColor={"#bb0f0f"}
                    onClick={() => {}}
                  >
                    <IoCloseSharp style={{ width: "15px" }} />
                  </ButtonProject>
                </ContainerButtons>
              </div>
            ))}
          </Users>
          <ButtonsForm>
            <button type="button" onClick={() => props.onSetUserList(false)}>
              Cancelar
            </button>
          </ButtonsForm>
        </ContainerEditImage>
      </BorderEffect>
    </Overlap>
  );
};

export default UserList;
