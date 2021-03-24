import Head from "next/head";
import { Loading } from "../../components/Loading";
import { Project } from "../../components/Project";
import { Cards } from "../../containers/Cards";
import { PageTemplate } from "../../parts/PageTemplate";
import { ProjectCMS } from "../../services/ProjectContext";
import { fetchProjects } from "../api/project";

interface ProjectsPageProps {
  meta: {
    title: string;
    description: string;
  };
  data: Array<ProjectCMS>;
}

const ProjectPage = (props: ProjectsPageProps) => {
  const { meta, data } = props;
  const projects = data;

  return (
    <PageTemplate>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={meta.description} />
      </Head>
      <Cards title="Conheça nossos projetos">
        {projects ? (
          projects.map((project: ProjectCMS) => {
            return <Project project={project} key={project.slug} />;
          })
        ) : (
          <Loading />
        )}
      </Cards>
    </PageTemplate>
  );
};

export default ProjectPage;

export async function getStaticProps() {
  const projects: Array<ProjectCMS> = await fetchProjects();

  return {
    props: {
      meta: {
        title: "IFMakerSD | Projetos de professores",
        description:
          "Página de projetos de professores do Laboratório IF Maker SD",
      },
      data: projects,
    },
  };
}
