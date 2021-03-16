import { useContext } from "react";
import { Loading } from "../../components/Loading";
import { Project } from "../../components/Project";
import { Wave } from "../../components/Wave";
import { ProjectCMS, ProjectContext } from "../../services/ProjectContext";
import styles from "./Projects.module.scss";

const Projects = () => {
  const { projects } = useContext(ProjectContext);

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
      </div>
    </section>
  );
};

export { Projects };
