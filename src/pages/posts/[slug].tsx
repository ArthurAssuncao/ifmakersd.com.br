import { GetStaticPaths, GetStaticPropsResult } from 'next';
import ErrorPage from 'next/error';
import { Post } from '../../containers/Post';
import { fetchPost, fetchPosts } from '../api/post';
import { PostCMS } from '../api/schema/post';

interface ProjectsPageProps {
  meta?: {
    title: string;
    description: string;
  };
  data?: PostCMS;
  type?: string;
}

const PostPageSlug = (props: ProjectsPageProps): JSX.Element => {
  if (
    !props ||
    props === undefined ||
    Object.keys(props).length === 0 ||
    !props.meta ||
    !props.data
  ) {
    return <ErrorPage statusCode={404} />;
  }

  const { meta, data } = props;
  const post = data;

  return <Post post={post} meta={meta} />;
};

export default PostPageSlug;

type Params = {
  params: {
    slug: string | string[];
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: Array<PostCMS> | null = await fetchPosts();
  const paths = posts.map((project: PostCMS) => {
    const params: Params = { params: { slug: project.slug } };
    return params;
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({
  params,
}: Params): Promise<GetStaticPropsResult<ProjectsPageProps>> {
  const { slug } = params;

  // specific project
  const slugComplete = typeof slug === 'string' ? slug : slug.join('/');

  const post: PostCMS | null = await fetchPost(slugComplete);

  if (!post || post === undefined) {
    return { props: {} };
  }

  return {
    props: {
      meta: {
        title: `${post.title} | IFMakerSD`,
        description: `${post.description} | IFMakerSD`,
      },
      data: post,
      type: 'single',
    },
  };
}
