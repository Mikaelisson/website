import Projects from "../../projects/Projects";
import { ButtonProject } from "../../projects/ProjectStyled";
import { DashboardContainer } from "./DashboardProjectsStyled";
import { IoCloseSharp } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";

const DashboardProjects = () => {
  return (
    <DashboardContainer>
      <Projects>
        <ButtonProject href="#" buttonBgColor={"#bb0f0f"}>
          <IoCloseSharp />
        </ButtonProject>
        <ButtonProject href="#" buttonBgColor={"#8a8a8a"}>
          <AiFillEdit />
        </ButtonProject>
      </Projects>
    </DashboardContainer>
  );
};

export default DashboardProjects;
