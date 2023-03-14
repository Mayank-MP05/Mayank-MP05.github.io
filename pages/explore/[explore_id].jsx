import React from "react";
import ProjectsDB from "../../data/projects-db-json";
import ProjectReadmeRenderer from "../../src/common/project-readme-renderer";
import SeoInjectorScript from "../../src/seo-injector-script";

const SingleExploreProject = ({ exploreId }) => {
  return (
    <>
      <SeoInjectorScript />
      <ProjectReadmeRenderer projectId={exploreId} />
    </>
  );
};

export async function getStaticPaths() {
  console.log("\n[INFO] Started building explore pages ...");
  const routesSlugs = ProjectsDB.filter(
    (project) => project.project_tab === "EXPLORE"
  ).map((singleProject) => singleProject.route_slug);

  console.log("[INFO] Explore Pages Data: ", routesSlugs);
  return {
    paths: [
      ...routesSlugs.map((exploreId) => ({
        params: {
          exploreId: exploreId,
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
      exploreId: params.exploreId,
    },
  };
}

export default SingleExploreProject;
