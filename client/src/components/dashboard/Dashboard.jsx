import DashboardMenu from "./menu/DashboardMenu";
import DashboardProjects from "./projects/DashboardProjects";

import { Background } from "../styles/Background";
import Global from "../styles/global";
import { DashboardHeader, DashboardMain } from "./DashboardStyled";

const Dashboard = (props) => {
  return (
    <>
      <Background>
        <DashboardHeader>
          <h1>Dashboard</h1>
          <DashboardMenu
            withoutPermission={props.withoutPermission}
            name={props.name}
          />
        </DashboardHeader>
      </Background>

      <DashboardMain>
        <DashboardProjects />
      </DashboardMain>

      <Global />
    </>
  );
};

export default Dashboard;
