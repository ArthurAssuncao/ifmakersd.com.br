import "intersection-observer";
import dynamic from "next/dynamic";
import "react-toastify/dist/ReactToastify.css";
import { Hero } from "../../components/Hero";
import { Loading } from "../../components/Loading";
import { CollaboratorCMS } from "../../pages/api/schema/collaborator";
import { EquipmentCMS } from "../../pages/api/schema/equipment";
import { PostCMS } from "../../pages/api/schema/post";
import { ProjectCMS } from "../../services/ProjectContext";
import { PageTemplate } from "../PageTemplate";

const Collaborators = dynamic(import("../Collaborators"), {
  loading: () => <Loading />,
});

const Equipments = dynamic(import("../Equipments"), {
  loading: () => <Loading />,
});

const Objectives = dynamic(import("../Objectives"), {
  loading: () => <Loading />,
});

const Posts = dynamic(import("../Posts"), {
  loading: () => <Loading />,
});

const Projects = dynamic(import("../Projects"), {
  loading: () => <Loading />,
});

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
