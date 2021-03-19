import Head from "next/head";
import { useRouter } from "next/router";
import { PageTemplate } from "../../parts/PageTemplate";
import { Projects } from "../../parts/Projects";
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
  const router = useRouter();

  return (
    <PageTemplate>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={meta.description} />
      </Head>
      <Projects projects={projects} moreButton={false} />
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
