import 'intersection-observer';
import dynamic from 'next/dynamic';
import 'react-toastify/dist/ReactToastify.css';
import { Hero } from '../../components/Hero';
import { Loading } from '../../components/Loading';
import { CollaboratorCMS } from '../../pages/api/schema/collaborator';
import { EquipmentCMS } from '../../pages/api/schema/equipment';
import { PostCMS } from '../../pages/api/schema/post';
import { ProjectCMS } from '../../services/ProjectContext';
import { PageTemplate } from '../PageTemplate';

const LocalLoading = () => <Loading />;

const Collaborators = dynamic(import('../Collaborators'), {
  loading: LocalLoading,
});

const Equipments = dynamic(import('../Equipments'), {
  loading: LocalLoading,
});

const Objectives = dynamic(import('../Objectives'), {
  loading: LocalLoading,
});

const Posts = dynamic(import('../Posts'), {
  loading: LocalLoading,
});

const Projects = dynamic(import('../Projects'), {
  loading: LocalLoading,
});

interface HomeProps {
  projects: Array<ProjectCMS>;
  posts: Array<PostCMS>;
  equipments: Array<EquipmentCMS>;
  collaborators: Array<CollaboratorCMS>;
}

const Home = (props: HomeProps): JSX.Element => {
  const { projects, posts, equipments, collaborators } = props;

  return (
    <PageTemplate hero={<Hero />}>
      <Objectives />

      <Projects projects={projects} hasMoreButton={true} />

      <Posts posts={posts} hasMoreButton={true} />

      <Equipments equipments={equipments} hasMoreButton={true} />

      <Collaborators collaborators={collaborators} hasMoreButton={false} />
    </PageTemplate>
  );
};

export { Home };
