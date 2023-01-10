import { Overlap } from "./AddProjectStyled";

export default (props) => {
  //add new project
  const addProject = async () => {
    const data = await fetch("/admin/add/project", {
      method: "POST",
      body: new FormData(document.getElementById("formAddProject")),
    });
    await data.json();
    props.onSetShowAddProject();
    props.consultProjects();
  };

  return (
    <Overlap>
      <h1>Novo Projeto</h1>
      <form
        id="formAddProject"
        onSubmit={(event) => {
          event.preventDefault();
        }}
        encType="multipart/form-data"
      >
        <input type="text" name="title" placeholder="Título" />
        <input type="text" name="description" placeholder="Descrição" />
        <input type="text" name="comments" placeholder="Comentários" />
        <input type="text" name="url" placeholder="Url" />
        <input type="text" name="repository" placeholder="Repositório" />
        <select name="mobileSupport" form="formAddProject">
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </select>
        <input type="file" name="image" accept="image/*" />

        <button onClick={() => addProject()}>Adicionar</button>
      </form>
    </Overlap>
  );
};
