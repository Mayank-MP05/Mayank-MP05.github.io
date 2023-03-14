import React from "react";
import ProjectsDB from "../../data/projects-db-json";
import ProjReadmeRender from "../../src/projects/ProjReadmeRender";
import SeoInjectorScript from "../../src/seo-injector-script";

const SingleProjectComponent = ({ project_id }) => {
  return (
    <>
      <SeoInjectorScript />
      <ProjReadmeRender p_id={project_id} />
    </>
  );
};

export async function getStaticPaths() {
  const routesSlugs = ProjectsDB.filter(
    (project) => project.project_tab === "PROJECTS"
  ).map((singleProject) => singleProject.route_slug);
  console.log({ routesSlugs });
  return {
    paths: [
      {
        params: routesSlugs.map((project_id) => ({
          project_id: `/projects/${project_id}`,
        })),
      },
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
