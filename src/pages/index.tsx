import { Home } from "../parts/Home";
import { ProjectCMS, ProjectProvider } from "../services/ProjectContext";
import { fetchPosts } from "./api/post";
import { fetchProjects } from "./api/project";
import { PostCMS } from "./api/schema/post";

interface InitialPageProps {
  data: {
    projects: Array<ProjectCMS>;
    posts: Array<PostCMS>;
  };
}

const InitialPage = (props: InitialPageProps) => {
  const { data } = props;
  const { projects, posts } = data;
  return (
    <ProjectProvider>
      <Home projects={projects} posts={posts} />
    </ProjectProvider>
  );
};

export async function getStaticProps() {
  const projects: Array<ProjectCMS> = await fetchProjects();
  const posts: Array<PostCMS> = await fetchPosts();

  const props: { props: InitialPageProps } = {
    props: {
      data: {
        projects: projects,
        posts: posts,
      },
    },
  };

  return props;
}

export default InitialPage;
