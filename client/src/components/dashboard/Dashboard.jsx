import { Background } from "../styles/Background";
import Global from "../styles/global";
import { DashboardHeader, DashboardMain } from "./DashboardStyled";
import { DashboardMenu } from "./menu/DashboardMenu";
import DashboardProjects from "./projects/DashboardProjects";

const Dashboard = () => {
  return (
    <>
      <Background>
        <DashboardHeader>
          <h1>Dashboard</h1>
          <DashboardMenu />
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
