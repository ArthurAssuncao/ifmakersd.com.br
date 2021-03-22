import { useContext } from "react";
import { Button } from "../../components/Button";
import { ButtonProps } from "../../components/Button/Button";
import { Loading } from "../../components/Loading";
import { Project } from "../../components/Project";
import { Wave } from "../../components/Wave";
import { ProjectCMS, ProjectContext } from "../../services/ProjectContext";
import styles from "./Projects.module.scss";

interface ProjectsProps {
  projects?: Array<ProjectCMS>;
  moreButton: boolean;
}

const Projects = (props: ProjectsProps) => {
  const { projects } = props.projects ? props : useContext(ProjectContext);
  const button: ButtonProps = {
    text: "Veja mais projetos",
    href: "/projects",
    backgroundColor: "purple",
  };

  return (
    <section className={styles.container}>
      <Wave className={styles.wave} />
      <div className={styles.containerInner}>
        <h3 className={styles.title}>Conheça nossos projetos</h3>
        <div className={styles.projects}>
          {projects ? (
            projects.map((project: ProjectCMS) => {
              return <Project project={project} key={project.slug} />;
            })
          ) : (
            <Loading />
          )}
        </div>
        <Button {...button} />
      </div>
    </section>
  );
};

export { Projects };
