import "react-toastify/dist/ReactToastify.css";
import { Hero } from "../../components/Hero";
import { ProjectCMS, ProjectProvider } from "../../services/ProjectContext";
import { Objectives } from "../Objectives";
import { PageTemplate } from "../PageTemplate";
import { Projects } from "../Projects";

interface HomeProps {
  projects: Array<ProjectCMS>;
}

const Home = (props: HomeProps) => {
  const { projects } = props;
  return (
    <PageTemplate headerChildren={<Hero />}>
      <Objectives />
      <ProjectProvider>
        <Projects projects={projects} />
      </ProjectProvider>
    </PageTemplate>
  );
};

export { Home };
