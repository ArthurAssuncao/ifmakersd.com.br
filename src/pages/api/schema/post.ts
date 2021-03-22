interface PostCMS {
  title: string;
  slug: string;
  hero_image: {
    url: string;
    type: string;
  };
  description: string;
  body: any;
  authors: [any];
  publish_date: any;
  tags: [string];
  category: [string];
}

export type { PostCMS };
