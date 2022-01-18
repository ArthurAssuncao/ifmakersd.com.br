import type { NextApiRequest, NextApiResponse } from 'next';
import { CmsClient } from '../../services/ContentfulClient';
import { ProjectCMS } from '../../services/ProjectContext';

const CONTENT_TYPE = 'project';
const cmsClient = CmsClient.getInstance();

interface ProjectContentfull {
  fields: {
    title: string;
    slug: string;
    photo: {
      fields: {
        file: {
          url: string;
          contentType: string;
        };
      };
    };
    description: string;
    body: Document;
  };
}

const createProject = (item: ProjectContentfull) => {
  if (!item || !item.fields) {
    return null;
  }
  const body = item.fields.body;
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

const createProjectsAndParse = (items: ProjectContentfull[]) => {
  const projects = [];
  for (let item of items) {
    const formatedProject = createProject(item);
    if (formatedProject) {
      projects.push(formatedProject);
    }
  }
  return projects;
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

  const newData = createProjectsAndParse(data.items as ProjectContentfull[]);

  res.status(200).json(newData);
};

const fetchProjects = async (limitReq?: number): Promise<ProjectCMS[]> => {
  const limit = limitReq && 10;
  const data = await cmsClient.getEntries({
    content_type: CONTENT_TYPE,
    order: '-sys.createdAt',
    limit,
  });

  const newData = createProjectsAndParse(data.items as ProjectContentfull[]);

  return newData;
};

const fetchProject = async (slug: string): Promise<null | ProjectCMS> => {
  const data = await cmsClient.getEntries({
    content_type: CONTENT_TYPE,
    limit: 1,
    'fields.slug': slug,
  });

  const newData = data
    ? createProject(data.items[0] as ProjectContentfull)
    : null;

  return newData;
};

const generateProjectUrl = (slug: string): string => {
  return `/projetos/${slug}`;
};

export default handleRequest;
export { fetchProjects, fetchProject, generateProjectUrl };
