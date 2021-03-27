import "intersection-observer";
import "react-toastify/dist/ReactToastify.css";
import { Hero } from "../../components/Hero";
import { CollaboratorCMS } from "../../pages/api/schema/collaborator";
import { EquipmentCMS } from "../../pages/api/schema/equipment";
import { PostCMS } from "../../pages/api/schema/post";
import { CollaboratorProvider } from "../../services/CollaboratorContext";
import { EquipmentProvider } from "../../services/EquipmentContext";
import { PostProvider } from "../../services/PostContext";
import { ProjectCMS, ProjectProvider } from "../../services/ProjectContext";
import { Collaborators } from "../Collaborators";
import { Equipments } from "../Equipments";
import { Objectives } from "../Objectives";
import { PageTemplate } from "../PageTemplate";
import { Posts } from "../Posts";
import { Projects } from "../Projects";

interface HomeProps {
  projects: Array<ProjectCMS>;
  posts: Array<PostCMS>;
  equipments: Array<EquipmentCMS>;
  collaborators: Array<CollaboratorCMS>;
}

const Home = (props: HomeProps) => {
  const { projects, posts, equipments, collaborators } = props;

  return (
    <PageTemplate headerChildren={<Hero />}>
      <Objectives />
      <ProjectProvider>
        <Projects projects={projects} hasMoreButton={true} />
      </ProjectProvider>
      <PostProvider>
        <Posts posts={posts} hasMoreButton={true} />
      </PostProvider>
      <EquipmentProvider>
        <Equipments equipments={equipments} hasMoreButton={true} />
      </EquipmentProvider>
      <CollaboratorProvider>
        <Collaborators collaborators={collaborators} hasMoreButton={false} />
      </CollaboratorProvider>
    </PageTemplate>
  );
};

export { Home };
