import Head from "next/head";
import { useContext } from "react";
import { PageTemplate } from "../../parts/PageTemplate";
import { Section } from "../../parts/Section";
import { PostContext } from "../../services/PostContext";
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
  const context = useContext(PostContext);
  const posts = data;

  return (
    <PageTemplate>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={meta.description} />
      </Head>
      <Section
        data={data}
        moreButton={false}
        type="post"
        context={context}
        title="Saiba mais sobre a indústria 4.0"
      />
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
