import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Head from "next/head";
import { ReactNode } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PageTemplate } from "../../parts/PageTemplate";
import { ProjectCMS } from "../../services/ProjectContext";
import { ImageUrl } from "../../util/ImageUrl";
import styles from "./ProjectPage.module.scss";

interface ProjectPageProps {
  project: ProjectCMS;
  meta: { title: string; description: string };
}

const ProjectPage = (props: ProjectPageProps) => {
  const { project, meta } = props;
  const projectImageURl = ImageUrl.generateDesktopSrcMedia(project.photo.url);

  const optionsContentfulRender: Options = {
    renderMark: {
      [MARKS.BOLD]: (text: ReactNode) => <strong>{text}</strong>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: ReactNode, children: ReactNode) => (
        <p>{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node: ReactNode, children: ReactNode) => (
        <h3>{children}</h3>
      ),
      [BLOCKS.HEADING_2]: (node: ReactNode, children: ReactNode) => (
        <h4>{children}</h4>
      ),
    },
  };

  return (
    <PageTemplate>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={meta.description} />
      </Head>
      <main className={styles.container}>
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
        <article className={styles.content}>
          <header className={styles.header}>
            <h2 className={styles.title}>{project.title}</h2>
            <div className={styles.description}>
              Resumo: <em>{project.description}</em>
            </div>
          </header>
          <div className={styles.body}>
            {documentToReactComponents(project.body, optionsContentfulRender)}
          </div>
          <footer></footer>
        </article>
      </main>
    </PageTemplate>
  );
};

export { ProjectPage };
