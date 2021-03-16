import type { NextApiRequest, NextApiResponse } from "next";
import { CmsClient } from "../../services/ContentfulClient";
import { ProjectCMS } from "../../services/ProjectContext";

// const { pageIndex = 1, limit = 3 } = req.query
//     const data = await client.getEntries({
//         content_type: 'posts',
//         skip: pageIndex * limit,
//         order: '-fields.publishDate',
//         limit,
//     })

const createProject = (item: any) => {
  const body = null;
  const description = item.fields.description;
  const photo = {
    url: item.fields.photo.fields.file.url,
    type: item.fields.photo.fields.file.contentType,
  };
  const slug = item.fields.slug;
  const title = item.fields.title;

  const project: ProjectCMS = {
    body,
    description,
    photo,
    slug,
    title,
  };
  return project;
};

const createProjectsAndParse = (items: any) => {
  const projects = [];
  for (let item of items) {
    projects.push(createProject(item));
  }
  return projects;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { limit = 10 } = req.query;
  const data = await CmsClient.getEntries({
    content_type: "project",
    order: "-sys.createdAt",
    limit,
  });

  const newData = createProjectsAndParse(data.items);

  res.status(200).json(newData);
};
