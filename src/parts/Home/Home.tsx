import "intersection-observer";
import "react-toastify/dist/ReactToastify.css";
import { Hero } from "../../components/Hero";
import { CollaboratorCMS } from "../../pages/api/schema/collaborator";
import { EquipmentCMS } from "../../pages/api/schema/equipment";
import { PostCMS } from "../../pages/api/schema/post";
import { ProjectCMS } from "../../services/ProjectContext";
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

      <Projects projects={projects} hasMoreButton={true} />

      <Posts posts={posts} hasMoreButton={true} />

      <Equipments equipments={equipments} hasMoreButton={true} />

      <Collaborators collaborators={collaborators} hasMoreButton={false} />
    </PageTemplate>
  );
};

export { Home };
