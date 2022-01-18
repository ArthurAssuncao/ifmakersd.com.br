import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { format, parseISO } from 'date-fns';
import * as localePtBr from 'date-fns/locale/pt-BR/index.js';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import nextId from 'react-id-generator';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import readingTime from 'reading-time';
import { BodyRender } from '../../components/BodyRender/BodyRender';
import { ShareButtons } from '../../components/ShareButtons';
import { generatePostUrl } from '../../pages/api/post';
import { PostCMS } from '../../pages/api/schema/post';
import { PageTemplate } from '../../parts/PageTemplate';
import { ImageUrl } from '../../util/ImageUrl';
import styles from './Post.module.scss';

interface PostProps {
  post: PostCMS;
  meta: { title: string; description: string };
}

const Post = (props: PostProps): JSX.Element => {
  const { post, meta } = props;
  const postImageURl = ImageUrl.generateDesktopSrcMedia(post.hero_image.url);
  const publishDate = parseISO(post.publish_date);
  const publishDateFormatted = format(publishDate, "'Dia' dd 'de' MMMM'", {
    locale: localePtBr.default,
  });
  const text = documentToPlainTextString(post.body);
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

  const fullnameToNameSecondName = (name: string): string => {
    const arrayName = name.split(' ');
    const newName =
      arrayName.length > 1
        ? `${arrayName[0]} ${arrayName[arrayName.length - 1]}`
        : arrayName[0];
    return newName;
  };

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
              alt={post.title}
              effect="blur"
              src={postImageURl.src}
            />
          </div>
          <div className={styles.contentWrapper}>
            <header className={styles.header}>
              <div className={styles.imageTypeWrapper}>
                <div className={styles.imageWrapper}>
                  <LazyLoadImage
                    wrapperClassName={styles.imageWrapperInner}
                    className={styles.image}
                    alt={post.title}
                    effect="blur"
                    src={postImageURl.src}
                  />
                </div>
                <div className={styles.type}>
                  <ul className={styles.typeList} data-active={true}>
                    {post.category.map((item) => {
                      return (
                        <li className={styles.typeItem} key={nextId()}>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <h2 className={styles.title}>{post.title}</h2>
              <div className={styles.info}>
                <div className={styles.infoPublishDate}>
                  <span>{publishDateFormatted}</span>
                </div>
                <span className={styles.infoSeparator}>&#9679;</span>
                <div className={styles.infoReadingTime}>
                  <span>{minutesToRead}min para ler</span>
                </div>
                <span className={styles.infoSeparator}>&#9679;</span>
                <div className={styles.infoAuthor}>
                  {post.authors &&
                    post.authors.map((author) => {
                      return (
                        <span key={author.sys.id}>
                          {fullnameToNameSecondName(author.fields.name)}
                        </span>
                      );
                    })}
                </div>
              </div>
              <div className={styles.description}>
                <em>{post.description}</em>
              </div>
            </header>

            <div className={styles.body}>
              <BodyRender body={post.body} />
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
              : generatePostUrl(post.slug)
          }
          title={post.title}
          tags={post.tags}
          widthCSSVar={'--share-size'}
        />
      </div>
    </PageTemplate>
  );
};

export { Post };
