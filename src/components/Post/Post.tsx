import { generatePostUrl } from "../../pages/api/post";
import { PostCMS } from "../../pages/api/schema/post";
import { Card, ItemCard } from "../Card";

interface PostProps {
  post: PostCMS;
}

const Post = (props: PostProps) => {
  const { post } = props;
  const postItem: ItemCard = {
    slug: post.slug,
    imageUrl: post.hero_image.url,
    title: post.title,
    description: post.description,
    href: generatePostUrl(post.slug),
  };

  return <Card item={postItem} />;
};

export { Post };
