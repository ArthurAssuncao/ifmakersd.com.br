import { useContext } from "react";
import { Button } from "../../components/Button";
import { Loading } from "../../components/Loading";
import { Project } from "../../components/Project";
import { ProjectCMS, ProjectContext } from "../../services/ProjectContext";
import { Cards } from "../Cards";
import { Section } from "../Section";
import styles from "./Projects.module.scss";
interface ProjectsProps {
  projects?: Array<ProjectCMS>;
  hasMoreButton: boolean;
}

const Projects = (props: ProjectsProps) => {
  const { projects } = props.projects ? props : useContext(ProjectContext);
  const { hasMoreButton } = props;

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
      moreButton={hasMoreButton && button}
      backgroundColor="purple"
      className={styles.container}
    >
      <Cards>
        {projects ? (
          projects.map((project: ProjectCMS) => {
            return <Project project={project} key={project.slug} />;
          })
        ) : (
          <Loading />
        )}
      </Cards>
    </Section>
  );
};

export { Projects };
