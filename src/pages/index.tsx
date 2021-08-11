import { GetStaticPropsResult } from 'next';
import { Home } from '../parts/Home';
import { ProjectCMS, ProjectProvider } from '../services/ProjectContext';
import { fetchCollaborators } from './api/collaborator';
import { fetchEquipments } from './api/equipment';
import { fetchPosts } from './api/post';
import { fetchProjects } from './api/project';
import { CollaboratorCMS } from './api/schema/collaborator';
import { EquipmentCMS } from './api/schema/equipment';
import { PostCMS } from './api/schema/post';

interface InitialPageProps {
  data: {
    projects: Array<ProjectCMS>;
    posts: Array<PostCMS>;
    equipments: Array<EquipmentCMS>;
    collaborators: Array<CollaboratorCMS>;
  };
}

const InitialPage = (props: InitialPageProps): JSX.Element => {
  const { data } = props;
  const { projects, posts, equipments, collaborators } = data;
  return (
    <ProjectProvider>
      <Home
        projects={projects}
        posts={posts}
        equipments={equipments}
        collaborators={collaborators}
      />
    </ProjectProvider>
  );
};

export async function getStaticProps(): Promise<
  GetStaticPropsResult<InitialPageProps>
> {
  const projects: Array<ProjectCMS> = await fetchProjects();
  const posts: Array<PostCMS> = await fetchPosts();
  const equipments: Array<EquipmentCMS> = await fetchEquipments();
  const collaborators: Array<CollaboratorCMS> = await fetchCollaborators();

  const props: { props: InitialPageProps } = {
    props: {
      data: {
        projects: projects,
        posts: posts,
        equipments: equipments,
        collaborators: collaborators,
      },
    },
  };

  return props;
}

export default InitialPage;
