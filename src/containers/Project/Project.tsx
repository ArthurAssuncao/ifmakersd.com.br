import Head from "next/head";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BodyRender } from "../../components/BodyRender";
import { PageTemplate } from "../../parts/PageTemplate";
import { ProjectCMS } from "../../services/ProjectContext";
import { ImageUrl } from "../../util/ImageUrl";
import styles from "./Project.module.scss";

interface ProjectProps {
  project: ProjectCMS;
  meta: { title: string; description: string };
}

const Project = (props: ProjectProps) => {
  const { project, meta } = props;
  const projectImageURl = ImageUrl.generateDesktopSrcMedia(project.photo.url);

  return (
    <PageTemplate>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={meta.description} />
      </Head>
      <main className={styles.container}>
        <article className={styles.content}>
          <div className={styles.imageHeaderWrapper}>
            <div className={styles.imageBackgroundWrapper}>
              <LazyLoadImage
                wrapperClassName={styles.imageWrapper}
                className={styles.image}
                alt={project.title}
                effect="blur"
                src={projectImageURl.src}
              />
              <div
                className={styles.background}
                style={
                  {
                    "--project-image": `url('${projectImageURl.src}')`,
                  } as React.CSSProperties
                }
              ></div>
            </div>
            <header className={styles.header}>
              <h2 className={styles.title}>{project.title}</h2>
              <div className={styles.description}>
                <em>{project.description}</em>
              </div>
            </header>
          </div>
          <div className={styles.body}>
            <BodyRender body={project.body} />
          </div>
          <footer></footer>
        </article>
      </main>
    </PageTemplate>
  );
};

export { Project };
