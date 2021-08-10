import { Fade } from 'react-awesome-reveal';
import { Button } from '../../components/Button';
import { Loading } from '../../components/Loading';
import { Project } from '../../components/Project';
import { ProjectCMS } from '../../services/ProjectContext';
import { Cards } from '../Cards';
import { Section } from '../Section';
import styles from './Projects.module.scss';
interface ProjectsProps {
  projects?: Array<ProjectCMS>;
  hasMoreButton: boolean;
}

const Projects = (props: ProjectsProps): JSX.Element => {
  const projects = props.projects ? props.projects : ([] as Array<ProjectCMS>);
  const { hasMoreButton } = props;

  const button = (
    <Button
      text="Veja mais projetos"
      href="/projects"
      backgroundColor="purple"
    />
  );

  return (
    <Section
      title="Conheça nossos projetos"
      moreButton={hasMoreButton && button}
      backgroundColor="purple"
      className={styles.container}
    >
      <Cards>
        <Fade duration={1500} cascade>
          {projects ? (
            projects.map((project: ProjectCMS) => {
              return <Project project={project} key={project.slug} />;
            })
          ) : (
            <Loading />
          )}
        </Fade>
      </Cards>
    </Section>
  );
};

export { Projects };
