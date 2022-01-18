import 'isomorphic-fetch';
import { createContext, ReactNode } from 'react';
import useSWR from 'swr';
import { PostCMS } from '../../pages/api/schema/post';

interface PostContextData {
  posts: Array<PostCMS> | undefined;
}

interface PostProviderProps {
  children: ReactNode;
}

const PostContext = createContext({} as PostContextData);

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const PostProvider = ({ children }: PostProviderProps): JSX.Element => {
  const { data } = useSWR<Array<PostCMS>>('/api/post?limit=3', fetcher);

  return (
    <PostContext.Provider value={{ posts: data }}>
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };
export type { PostContextData };
