import Head from "next/head";
import { Loading } from "../../components/Loading";
import { Post } from "../../components/Post";
import { Cards } from "../../containers/Cards";
import { PageTemplate } from "../../parts/PageTemplate";
import { fetchPosts } from "../api/post";
import { PostCMS } from "../api/schema/post";

interface PostsPageProps {
  meta: {
    title: string;
    description: string;
  };
  data: Array<PostCMS>;
}

const ProjectPage = (props: PostsPageProps) => {
  const { meta, data } = props;

  const posts = data;

  return (
    <PageTemplate>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={meta.description} />
      </Head>
      <Cards title="Conheça mais sobre a indústria 4.0">
        {posts ? (
          posts.map((post: PostCMS) => {
            return <Post post={post} key={post.slug} />;
          })
        ) : (
          <Loading />
        )}
      </Cards>
    </PageTemplate>
  );
};

export default ProjectPage;

export async function getStaticProps() {
  const posts: Array<PostCMS> = await fetchPosts();

  return {
    props: {
      meta: {
        title: "IFMakerSD | Projetos de professores",
        description:
          "Página de publicações de professores do Laboratório IF Maker SD",
      },
      data: posts,
    },
  };
}
