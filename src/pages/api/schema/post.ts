import { Document } from "@contentful/rich-text-types";

interface PostCMS {
  title: string;
  slug: string;
  hero_image: {
    url: string;
    type: string;
  };
  description: string;
  body: Document;
  authors: [any];
  publish_date: any;
  tags: [string];
  category: [string];
}

export type { PostCMS };
