import { Home } from "../parts/Home";
import { ProjectCMS } from "../services/ProjectContext";
import { fetchProjects } from "./api/project";

interface InitialPageProps {
  data: {
    projects: Array<ProjectCMS>;
  };
}

const InitialPage = (props: InitialPageProps) => {
  const { data } = props;
  const projects = data.projects;
  return <Home projects={projects} />;
};

export async function getStaticProps() {
  const projects: Array<ProjectCMS> = await fetchProjects();

  const props: { props: InitialPageProps } = {
    props: {
      data: {
        projects: projects,
      },
    },
  };

  return props;
}

export default InitialPage;
