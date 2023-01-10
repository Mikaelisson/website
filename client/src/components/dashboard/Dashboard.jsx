import { useState } from "react";
import DashboardMenu from "./menu/DashboardMenu";
import DashboardProjects from "./projects/DashboardProjects";
import AddProject from "./projects/add-project/AddProject";

import { Background } from "../styles/Background";
import Global from "../styles/global";
import { DashboardHeader, DashboardMain } from "./DashboardStyled";

const Dashboard = (props) => {
  const [projects, setProjects] = useState([]);
  const [showAddProject, setShowAddProject] = useState(false);

  const onSetShowAddProject = () => {
    setShowAddProject(!showAddProject);
  };

  const consultProjects = () => {
    fetch("/api/search/projects")
      .then((res) => res.json())
      .then((res) => {
        setProjects(res);
      });
  };

  return (
    <>
      <Background>
        <DashboardHeader>
          <h1>Dashboard</h1>
          <DashboardMenu
            withoutPermission={props.withoutPermission}
            name={props.name}
            onSetShowAddProject={onSetShowAddProject}
          />
        </DashboardHeader>
      </Background>

      <DashboardMain>
        <DashboardProjects
          projects={projects}
          consultProjects={consultProjects}
        />

        {showAddProject && (
          <AddProject
            consultProjects={consultProjects}
            onSetShowAddProject={onSetShowAddProject}
          />
        )}
      </DashboardMain>

      <Global />
    </>
  );
};

export default Dashboard;
