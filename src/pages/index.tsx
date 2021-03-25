import { Home } from "../parts/Home";
import { ProjectCMS, ProjectProvider } from "../services/ProjectContext";
import { fetchEquipments } from "./api/equipment";
import { fetchPosts } from "./api/post";
import { fetchProjects } from "./api/project";
import { EquipmentCMS } from "./api/schema/equipment";
import { PostCMS } from "./api/schema/post";

interface InitialPageProps {
  data: {
    projects: Array<ProjectCMS>;
    posts: Array<PostCMS>;
    equipments: Array<EquipmentCMS>;
  };
}

const InitialPage = (props: InitialPageProps) => {
  const { data } = props;
  const { projects, posts, equipments } = data;
  return (
    <ProjectProvider>
      <Home projects={projects} posts={posts} equipments={equipments} />
    </ProjectProvider>
  );
};

export async function getStaticProps() {
  const projects: Array<ProjectCMS> = await fetchProjects();
  const posts: Array<PostCMS> = await fetchPosts();
  const equipments: Array<EquipmentCMS> = await fetchEquipments();

  const props: { props: InitialPageProps } = {
    props: {
      data: {
        projects: projects,
        posts: posts,
        equipments: equipments,
      },
    },
  };

  return props;
}

export default InitialPage;
