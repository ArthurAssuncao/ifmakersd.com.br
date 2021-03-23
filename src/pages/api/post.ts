import type { NextApiRequest, NextApiResponse } from "next";
import { CmsClient } from "../../services/ContentfulClient";
import { PostCMS } from "./schema/post";

const CONTENT_TYPE = "post";

const createPost = (item: any) => {
  if (!item || !item.fields) {
    return null;
  }

  const post: PostCMS = {
    title: item.fields.title,
    slug: item.fields.slug,
    hero_image: {
      url: item.fields.hero_image.fields.file.url,
      type: item.fields.hero_image.fields.file.contentType,
    },
    description: item.fields.description,
    body: item.fields.body,
    authors: item.fields.author,
    publish_date: item.fields.publish_date,
    tags: item.fields.tags,
    category: item.fields.category,
  };
  return post;
};

const createPostsAndParse = (items: any) => {
  const posts = [];
  for (let item of items) {
    const formatedPost = createPost(item);
    if (formatedPost) {
      posts.push(formatedPost);
    }
  }
  return posts;
};

const handleRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  const { limit = 10 } = req.query;
  const data = await CmsClient.getEntries({
    content_type: CONTENT_TYPE,
    order: "-sys.createdAt",
    limit,
  });

  const newData = createPostsAndParse(data.items);

  res.status(200).json(newData);
};

const fetchPosts = async (limitReq?: number) => {
  const limit = limitReq && 10;
  const data = await CmsClient.getEntries({
    content_type: CONTENT_TYPE,
    order: "-sys.createdAt",
    limit,
  });

  const newData = createPostsAndParse(data.items);

  return newData;
};

const fetchPost = async (slug: string) => {
  const data = await CmsClient.getEntries({
    content_type: CONTENT_TYPE,
    limit: 1,
    "fields.slug": slug,
  });

  const newData = data ? createPost(data.items[0]) : null;

  return newData;
};

const generatePostUrl = (slug: string) => {
  return `/posts/${slug}`;
};

export default handleRequest;
export { fetchPosts, fetchPost, generatePostUrl };
