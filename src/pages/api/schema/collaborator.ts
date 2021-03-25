interface CollaboratorCMS {
  name: string;
  slug: string;
  photo: {
    url: string;
    type: string;
  };
  description: string;
  webpage: string;
}

export type { CollaboratorCMS };
