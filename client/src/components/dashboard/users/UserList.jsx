import { Users } from "../menu/DashboardMenuStyled";

import { IoCloseSharp } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";
import { Overlap } from "../projects/add-and-edit-project/AddOrEditProjectStyled";
import { BorderEffect, ButtonsForm } from "../../admin/AdminStyled";

//user list
import { ContainerEditImage } from "../projects/add-and-edit-project/EditImageStyled";
import { ButtonProject, ContainerButtons } from "../../projects/ProjectStyled";

const UserList = (props) => {
  const deleteUser = async (user) => {
    props.changeLoading();
    await fetch(`admin/delete/user/${user._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: props.email }),
    });
    props.usersAPI();
  };

  return (
    <>
      <Overlap>
        <BorderEffect>
          <ContainerEditImage>
            <h1>Lista de Usuários</h1>
            <Users>
              {props.users
                .map((user, index) => (
                  <div key={index}>
                    <p>{user.name}</p>
                    <ContainerButtons>
                      <ButtonProject
                        widthElement={"20px"}
                        paddingElement={"0"}
                        buttonBgColor={"#8a8a8a"}
                        onClick={() => {
                          props.onSetShowUserPanel(true);
                          props.onSetInformationUser(user);
                        }}
                      >
                        <AiFillEdit style={{ width: "15px" }} />
                      </ButtonProject>

                      <ButtonProject
                        widthElement={"20px"}
                        paddingElement={"0"}
                        buttonBgColor={"#bb0f0f"}
                        onClick={() => deleteUser(user)}
                      >
                        <IoCloseSharp style={{ width: "15px" }} />
                      </ButtonProject>
                    </ContainerButtons>
                  </div>
                ))
                .reverse()}
            </Users>
            <ButtonsForm>
              <button type="button" onClick={() => props.onSetUserList(false)}>
                Cancelar
              </button>
            </ButtonsForm>
          </ContainerEditImage>
        </BorderEffect>
      </Overlap>
    </>
  );
};

export default UserList;
