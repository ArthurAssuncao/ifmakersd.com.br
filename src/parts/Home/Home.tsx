import "react-toastify/dist/ReactToastify.css";
import { Hero } from "../../components/Hero";
import { PostCMS } from "../../pages/api/schema/post";
import { PostProvider } from "../../services/PostContext";
import { ProjectCMS, ProjectProvider } from "../../services/ProjectContext";
import { Objectives } from "../Objectives";
import { PageTemplate } from "../PageTemplate";
import { Posts } from "../Posts";
import { Projects } from "../Projects";

interface HomeProps {
  projects: Array<ProjectCMS>;
  posts: Array<PostCMS>;
}

const Home = (props: HomeProps) => {
  const { projects, posts } = props;

  return (
    <PageTemplate headerChildren={<Hero />}>
      <Objectives />
      <ProjectProvider>
        <Projects projects={projects} hasMoreButton={true} />
      </ProjectProvider>
      <PostProvider>
        <Posts posts={posts} hasMoreButton={true} />
      </PostProvider>
    </PageTemplate>
  );
};

export { Home };
