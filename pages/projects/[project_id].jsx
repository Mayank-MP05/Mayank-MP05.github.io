import React from "react";
import ProjectsDB from "../../data/projects-db-json";
import ProjectReadmeRenderer from "../../src/common/project-readme-renderer";
import SeoInjectorScript from "../../src/seo-injector-script";

const SingleProjectComponent = ({ project_id }) => {
  return (
    <>
      <SeoInjectorScript />
      <ProjectReadmeRenderer p_id={project_id} />
    </>
  );
};

export async function getStaticPaths() {
  console.log("\n[INFO] Started building project pages ...");

  const routesSlugs = ProjectsDB.filter(
    (project) => project.project_tab === "PROJECTS"
  ).map((singleProject) => singleProject.route_slug);

  console.log("[INFO] Projects Pages Data: ", routesSlugs);

  return {
    paths: [
      ...routesSlugs.map((project_id) => ({
        params: {
          project_id: `${project_id}`,
        },
      })),
    ],
    fallback: true,
    // DOCS: Fallback will stay false because we want to show 404 page if the project is not found
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      project_id: params.project_id,
    },
  };
}

export default SingleProjectComponent;
