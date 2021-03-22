import { useContext } from "react";
import { Button } from "../../components/Button";
import { Loading } from "../../components/Loading";
import { Project } from "../../components/Project";
import { ProjectCMS, ProjectContext } from "../../services/ProjectContext";
import { Section } from "../Section";

interface ProjectsProps {
  projects?: Array<ProjectCMS>;
  moreButton: boolean;
}

const Projects = (props: ProjectsProps) => {
  const { projects } = props.projects ? props : useContext(ProjectContext);

  const button = (
    <Button
      text="Veja mais projetos"
      href="/projects"
      backgroundColor="purple"
    />
  );

  return (
    <Section
      title="Conheça nossos projetos"
      moreButton={button}
      backgroundColor="purple"
    >
      {projects ? (
        projects.map((project: ProjectCMS) => {
          return <Project project={project} key={project.slug} />;
        })
      ) : (
        <Loading />
      )}
    </Section>
  );
};

export { Projects };
