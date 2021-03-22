import "react-toastify/dist/ReactToastify.css";
import { Hero } from "../../components/Hero";
import { PostProvider } from "../../services/PostContext";
import { ProjectCMS, ProjectProvider } from "../../services/ProjectContext";
import { Objectives } from "../Objectives";
import { PageTemplate } from "../PageTemplate";
import { Posts } from "../Posts";
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
        <Projects projects={projects} moreButton={true} />
      </ProjectProvider>
      <PostProvider>
        <Posts />
      </PostProvider>
    </PageTemplate>
  );
};

export { Home };
