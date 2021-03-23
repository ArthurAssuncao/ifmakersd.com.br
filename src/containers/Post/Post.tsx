import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import bxsTimeFive from "@iconify/icons-bx/bxs-time-five";
import bxsUser from "@iconify/icons-bx/bxs-user";
import dateLine from "@iconify/icons-clarity/date-line";
import { Icon } from "@iconify/react";
import { format, parseISO } from "date-fns";
import * as localePtBr from "date-fns/locale/pt-BR/index.js";
import Head from "next/head";
import { LazyLoadImage } from "react-lazy-load-image-component";
import readingTime from "reading-time";
import { BodyRender } from "../../components/BodyRender/BodyRender";
import { PostCMS } from "../../pages/api/schema/post";
import { PageTemplate } from "../../parts/PageTemplate";
import { ImageUrl } from "../../util/ImageUrl";
import styles from "./Post.module.scss";
interface PostProps {
  post: PostCMS;
  meta: { title: string; description: string };
}

const Post = (props: PostProps) => {
  const { post, meta } = props;
  const postImageURl = ImageUrl.generateDesktopSrcMedia(post.hero_image.url);
  const publishDate = parseISO(post.publish_date);
  const publishDateFormatted = format(publishDate, "'Dia' dd 'de' MMMM'", {
    locale: localePtBr.default,
  });
  const text = documentToPlainTextString(post.body);
  const statsToRead = readingTime(text);
  const minutesToRead = Math.ceil(statsToRead.minutes);

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
                alt={post.title}
                effect="blur"
                src={postImageURl.src}
              />
              <div
                className={styles.background}
                style={
                  {
                    "--post-image": `url('${postImageURl.src}')`,
                  } as React.CSSProperties
                }
              ></div>
            </div>
            <header className={styles.header}>
              <h2 className={styles.title}>{post.title}</h2>
              <div className={styles.info}>
                <div className={styles.infoPublishDate}>
                  <Icon icon={dateLine} className={styles.infoIcon} />
                  <span>{publishDateFormatted}</span>
                </div>
                <div className={styles.infoAuthor}>
                  <Icon icon={bxsUser} className={styles.infoIcon} />
                  {post.authors &&
                    post.authors.map((author) => {
                      return (
                        <span key={author.sys.id}>{author.fields.name}</span>
                      );
                    })}
                </div>
                <div className={styles.infoReadingTime}>
                  <Icon icon={bxsTimeFive} className={styles.infoIcon} />
                  <span>{minutesToRead}min para ler</span>
                </div>
              </div>
              <div className={styles.description}>
                <em>{post.description}</em>
              </div>
            </header>
          </div>
          <div className={styles.body}>
            <BodyRender body={post.body} />
          </div>
          <footer></footer>
        </article>
      </main>
    </PageTemplate>
  );
};

export { Post };
