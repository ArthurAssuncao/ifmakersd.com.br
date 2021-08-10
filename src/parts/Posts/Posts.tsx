import { Fade } from 'react-awesome-reveal';
import { Button } from '../../components/Button';
import { Loading } from '../../components/Loading';
import { Post } from '../../components/Post';
import { PostCMS } from '../../pages/api/schema/post';
import { Cards } from '../../parts/Cards';
import { Section } from '../Section';

interface PropsPosts {
  posts?: Array<PostCMS>;
  hasMoreButton: boolean;
}

const Posts = (props: PropsPosts): JSX.Element => {
  const posts = props.posts ? props.posts : ([] as Array<PostCMS>);
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
      <Cards>
        <Fade duration={1500} cascade>
          {posts ? (
            posts.map((post: PostCMS) => {
              return <Post post={post} key={post.slug} />;
            })
          ) : (
            <Loading />
          )}
        </Fade>
      </Cards>
    </Section>
  );
};

export { Posts };
