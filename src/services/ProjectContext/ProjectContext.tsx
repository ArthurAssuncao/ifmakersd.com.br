import "isomorphic-fetch";
import { createContext, ReactNode, useEffect } from "react";
import useSWR from "swr";
interface ProjectCMS {
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

const ProjectProvider = ({ children }: ProjectProviderProps) => {
  const { data, error } = useSWR<Array<ProjectCMS>>(
    "/api/project?limit=3",
    fetcher
  );

  useEffect(() => {}, []);

  return (
    <ProjectContext.Provider value={{ projects: data }}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectProvider };
export type { ProjectCMS };
