import Head from "next/head";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
        <article className={styles.content}>
          <header className={styles.header}>
            <h2 className={styles.title}>{post.title}</h2>
            <div className={styles.description}>
              Resumo: <em>{post.description}</em>
            </div>
          </header>
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
