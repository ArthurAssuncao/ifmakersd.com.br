import { Document } from '@contentful/rich-text-types';
import type { NextApiRequest, NextApiResponse } from 'next';
import { CmsClient } from '../../services/ContentfulClient';
import { PostCMS } from './schema/post';

const CONTENT_TYPE = 'post';
const cmsClient = CmsClient.getInstance();

interface PostContentfull {
  fields: {
    title: string;
    slug: string;
    hero_image: {
      fields: {
        file: {
          url: string;
          contentType: string;
        };
      };
    };
    description: string;
    body: Document;
    author: [string];
    publish_date: string;
    tags: [string];
    category: [
      {
        fields: {
          title: string;
          slug: string;
        };
      }
    ];
  };
}

const createPost = (item: PostContentfull) => {
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
    category: item.fields.category.map((item) => {
      return item.fields.title;
    }),
  };
  return post;
};

const createPostsAndParse = (items: PostContentfull[]) => {
  const posts = [];
  for (let item of items) {
    const formatedPost = createPost(item);
    if (formatedPost) {
      posts.push(formatedPost);
    }
  }
  return posts;
};

const handleRequest = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { limit = 10 } = req.query;
  const data = await cmsClient.getEntries({
    content_type: CONTENT_TYPE,
    order: '-sys.createdAt',
    limit,
  });

  const newData = createPostsAndParse(data.items as PostContentfull[]);

  res.status(200).json(newData);
};

const fetchPosts = async (limitReq?: number): Promise<PostCMS[]> => {
  const limit = limitReq && 10;
  const data = await cmsClient.getEntries({
    content_type: CONTENT_TYPE,
    order: '-sys.createdAt',
    limit,
  });

  const newData = createPostsAndParse(data.items as PostContentfull[]);

  return newData;
};

const fetchPost = async (slug: string): Promise<null | PostCMS> => {
  const data = await cmsClient.getEntries({
    content_type: CONTENT_TYPE,
    limit: 1,
    'fields.slug': slug,
  });

  const newData = data ? createPost(data.items[0] as PostContentfull) : null;

  return newData;
};

const generatePostUrl = (slug: string): string => {
  return `/posts/${slug}`;
};

export default handleRequest;
export { fetchPosts, fetchPost, generatePostUrl };
