import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BodyRender } from '../../components/BodyRender';
import { ShareButtons } from '../../components/ShareButtons';
import { generatePostUrl } from '../../pages/api/post';
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

  const [width, setWidth] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);
  const [onScroll, setOnScroll] = useState(false);

  let shareButtonRef = useRef<HTMLDivElement | null>(null);

  const verifyIsMobile = (width: number) => {
    if (width < 768) {
      setIsMobile(true);
      return;
    }
    setIsMobile(false);
  };

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

  useEffect(() => {
    const handleWindowSizeChange = () => {
      const width = window.innerWidth;
      setWidth(width);
      verifyIsMobile(width);
    };

    setWidth(window.innerWidth);
    verifyIsMobile(width);
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, [width]);

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
                    '--project-image': `url('${projectImageURl.src}')`,
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
      <div
        className={styles.shareButton}
        data-mobile={isMobile}
        data-onscroll={onScroll}
        ref={shareButtonRef}
      >
        <ShareButtons
          url={
            typeof window !== 'undefined'
              ? window.location.href
              : generatePostUrl(project.slug)
          }
          title={project.title}
          direction={isMobile ? 'toBottom' : 'toTop'}
          widthCSSVar={'--share-size'}
        />
      </div>
    </PageTemplate>
  );
};

export { Project };
