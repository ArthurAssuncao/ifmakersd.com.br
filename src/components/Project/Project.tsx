import { generateProjectUrl } from "../../pages/api/project";
import { ProjectCMS } from "../../services/ProjectContext";
import { Card, ItemCard } from "../Card";

interface ProjectProps {
  project: ProjectCMS;
}

const Project = (props: ProjectProps) => {
  const { project } = props;
  const projectItem: ItemCard = {
    slug: project.slug,
    imageUrl: project.photo.url,
    title: project.title,
    description: project.description,
    href: generateProjectUrl(project.slug),
  };

  return <Card item={projectItem} />;
};

export { Project };
