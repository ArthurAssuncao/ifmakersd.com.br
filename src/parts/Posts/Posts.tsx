import { useContext } from "react";
import { Button } from "../../components/Button";
import { Loading } from "../../components/Loading";
import { Post } from "../../components/Post";
import { PostCMS } from "../../pages/api/schema/post";
import { PostContext } from "../../services/PostContext";
import { Section } from "../Section";

interface PropsPosts {
  posts?: Array<PostCMS>;
  hasMoreButton: boolean;
}

const Posts = (props: PropsPosts) => {
  const { posts } = props.posts ? props : useContext(PostContext);
  const { hasMoreButton } = props;

  const button = (
    <Button
      backgroundColor="neutral"
      href="/posts"
      text="Veja mais artigos"
    ></Button>
  );
  return (
    <Section
      title="Saiba mais sobre a Indústria 4.0"
      moreButton={hasMoreButton && button}
      backgroundColor="neutral"
    >
      {posts ? (
        posts.map((post: PostCMS) => {
          return <Post post={post} key={post.slug} />;
        })
      ) : (
        <Loading />
      )}
    </Section>
  );
};

export { Posts };
