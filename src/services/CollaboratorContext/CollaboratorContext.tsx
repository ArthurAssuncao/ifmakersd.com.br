import "isomorphic-fetch";
import { createContext, ReactNode, useEffect } from "react";
import useSWR from "swr";
import { CollaboratorCMS } from "../../pages/api/schema/collaborator";

interface CollaboratorContextData {
  collaborators: Array<CollaboratorCMS> | undefined;
}

interface CollaboratorProviderProps {
  children: ReactNode;
}

const CollaboratorContext = createContext({} as CollaboratorContextData);

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const CollaboratorProvider = ({ children }: CollaboratorProviderProps) => {
  const { data, error } = useSWR<Array<CollaboratorCMS>>(
    "/api/collaborator?limit=3",
    fetcher
  );

  useEffect(() => {}, []);

  return (
    <CollaboratorContext.Provider value={{ collaborators: data }}>
      {children}
    </CollaboratorContext.Provider>
  );
};

export { CollaboratorContext, CollaboratorProvider };
export type { CollaboratorContextData };
