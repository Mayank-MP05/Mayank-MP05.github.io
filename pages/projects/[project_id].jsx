import React from "react";
import ProjectsDB from "../../data/projects-db-json";
import ProjectReadmeRenderer from "../../src/common/project-readme-renderer";
import SeoInjectorScript from "../../src/seo-injector-script";

const SingleProjectComponent = ({
  project_id,
  singleProjectDetails,
  markdownContent,
}) => {
  return (
    <>
      <ProjectReadmeRenderer
        projectId={project_id}
        singleProjectDetails={singleProjectDetails}
        markdownContent={markdownContent}
      />
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
  const singleProjectArr = ProjectsDB.filter(
    (singleProj) => singleProj.route_slug === params.project_id
  );

  const DOMAIN_NAME = "https://mayank5pande.com";
  const readme_file_path = singleProjectArr[0].readme_file_path;

  // DOCS: Fetch the markdown file content
  console.log(`\n[INFO] GET ${DOMAIN_NAME}${readme_file_path}`);
  const fetchPromise = await fetch(`${DOMAIN_NAME}${readme_file_path}`);
  const textConvPromise = await fetchPromise.text();
  return {
    props: {
      project_id: params.project_id,
      singleProjectDetails: singleProjectArr[0],
      markdownContent: textConvPromise.toString(),
    },
  };
}

export default SingleProjectComponent;
