import 'isomorphic-fetch';
import { createContext, ReactNode } from 'react';
import useSWR from 'swr';
interface ProjectCMS {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any;
  description: string;
  photo: {
    url: string;
    type: string;
  };
  slug: string;
  title: string;
}

interface ProjectContextData {
  projects: Array<ProjectCMS> | undefined;
}

interface ProjectProviderProps {
  children: ReactNode;
}

const ProjectContext = createContext({} as ProjectContextData);

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProjectProvider = ({ children }: ProjectProviderProps): JSX.Element => {
  const { data } = useSWR<Array<ProjectCMS>>('/api/project?limit=3', fetcher);

  return (
    <ProjectContext.Provider value={{ projects: data }}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectProvider };
export type { ProjectCMS, ProjectContextData };
