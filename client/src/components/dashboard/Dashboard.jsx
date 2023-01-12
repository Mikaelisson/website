import { useState } from "react";
import DashboardMenu from "./menu/DashboardMenu";
import DashboardProjects from "./projects/DashboardProjects";

import { Background } from "../styles/Background";
import Global from "../styles/global";
import { DashboardHeader, DashboardMain } from "./DashboardStyled";
import Loading from "../loading/Loading";

const Dashboard = (props) => {
  const [projects, setProjects] = useState([]);
  const [activeMenu, setActiveMenu] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const changeMenu = () => {
    setActiveMenu(!activeMenu);
  };

  const changeLoading = () => {
    setShowLoading(!showLoading);
  };

  const consultProjects = () => {
    fetch("/api/search/projects")
      .then((res) => res.json())
      .then((res) => {
        setProjects(res);
        setShowLoading(false);
      });
  };

  return (
    <>
      <Background>
        <DashboardHeader>
          <h1>Dashboard</h1>
          <DashboardMenu
            activeMenu={activeMenu}
            changeMenu={changeMenu}
            withoutPermission={props.withoutPermission}
            name={props.name}
            consultProjects={consultProjects}
            changeLoading={changeLoading}
            showLoading={showLoading}
          />
        </DashboardHeader>
      </Background>

      <DashboardMain>
        <DashboardProjects
          projects={projects}
          consultProjects={consultProjects}
          changeLoading={changeLoading}
        />
      </DashboardMain>

      {showLoading && <Loading />}

      <Global />
    </>
  );
};

export default Dashboard;
