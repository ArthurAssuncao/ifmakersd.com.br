import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import readingTime from 'reading-time';
import { BodyRender } from '../../components/BodyRender';
import { ShareButtons } from '../../components/ShareButtons';
import { generateProjectUrl } from '../../pages/api/project';
import { PageTemplate } from '../../parts/PageTemplate';
import { ProjectCMS } from '../../services/ProjectContext';
import { ImageUrl } from '../../util/ImageUrl';
import styles from './Project.module.scss';

interface ProjectProps {
  project: ProjectCMS;
  meta: { title: string; description: string };
}

const Project = (props: ProjectProps): JSX.Element => {
  const { project, meta } = props;
  const projectImageURl = ImageUrl.generateDesktopSrcMedia(project.photo.url);
  // const publishDate = parseISO(new Date().toDateString());
  // const publishDateFormatted = format(publishDate, "'Dia' dd 'de' MMMM'", {
  //   locale: localePtBr.default,
  // });
  const text = documentToPlainTextString(project.body);
  const statsToRead = readingTime(text);
  const minutesToRead = Math.ceil(statsToRead.minutes);

  const [onScroll, setOnScroll] = useState(false);

  let shareButtonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const setOnScrollCheck = (value: boolean) => {
      if (
        value !== onScroll ||
        value !== Boolean(shareButtonRef.current?.dataset.onscroll)
      ) {
        setOnScroll(value);
      }
    };

    const checkScrollTop = () => {
      const heightBase = 60 * 1.5;
      const limitHeight = heightBase;

      if (window.pageYOffset > limitHeight) {
        setOnScrollCheck(true);
      } else {
        setOnScrollCheck(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [onScroll]);

  return (
    <PageTemplate>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={meta.description} />
      </Head>
      <main className={styles.container}>
        <article className={styles.content}>
          <div className={styles.imageWrapper}>
            <LazyLoadImage
              wrapperClassName={styles.imageWrapperInner}
              className={styles.image}
              alt={project.title}
              effect="blur"
              src={projectImageURl.src}
            />
          </div>
          <div className={styles.contentWrapper}>
            <header className={styles.header}>
              <div className={styles.imageTypeWrapper}>
                <div className={styles.imageWrapper}>
                  <LazyLoadImage
                    wrapperClassName={styles.imageWrapperInner}
                    className={styles.image}
                    alt={project.title}
                    effect="blur"
                    src={projectImageURl.src}
                  />
                </div>
              </div>
              <h2 className={styles.title}>{project.title}</h2>
              <div className={styles.info}>
                {/* <div className={styles.infoPublishDate}>
                  <span>{publishDateFormatted}</span>
                </div> */}
                {/* <span className={styles.infoSeparator}>&#9679;</span> */}
                <div className={styles.infoReadingTime}>
                  <span>{minutesToRead}min para ler</span>
                </div>
                {/* <span className={styles.infoSeparator}>&#9679;</span> */}
                {/* <div className={styles.infoAuthor}>
                  {project.authors &&
                    project.authors.map((author) => {
                      return (
                        <span key={author.sys.id}>
                          {fullnameToNameSecondName(author.fields.name)}
                        </span>
                      );
                    })}
                </div> */}
              </div>
              <div className={styles.description}>
                <em>{project.description}</em>
              </div>
            </header>

            <div className={styles.body}>
              <BodyRender body={project.body} />
            </div>
            <footer></footer>
          </div>
        </article>
      </main>
      <div
        className={styles.shareButton}
        data-onscroll={onScroll}
        ref={shareButtonRef}
      >
        <ShareButtons
          url={
            typeof window !== 'undefined'
              ? window.location.href
              : generateProjectUrl(project.slug)
          }
          title={project.title}
          widthCSSVar={'--share-size'}
        />
      </div>
    </PageTemplate>
  );
};

export { Project };
