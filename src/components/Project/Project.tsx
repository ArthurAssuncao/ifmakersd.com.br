import { LazyLoadImage } from "react-lazy-load-image-component";
import { generateProjectUrl } from "../../pages/api/project";
import { ProjectCMS } from "../../services/ProjectContext";
import { ImageUrl } from "../../util/ImageUrl";
import styles from "./Project.module.scss";

interface ProjectProps {
  project: ProjectCMS;
}

const Project = (props: ProjectProps) => {
  const { project } = props;
  const { src } = ImageUrl.generateCardSrcMedia(project.photo.url);

  return (
    <article className={styles.container}>
      <a href={generateProjectUrl(project.slug)} title={project.title}>
        <LazyLoadImage
          wrapperClassName={styles.imageWrapper}
          className={styles.image}
          alt={project.title}
          effect="blur"
          src={src}
        />
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.contentInner}>
              <header>
                <h5 className={styles.title}>{project.title}</h5>
              </header>
              <div className={styles.description}>{project.description}</div>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

export { Project };
