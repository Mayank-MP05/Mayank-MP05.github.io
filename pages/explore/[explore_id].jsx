import path from "path";
import React from "react";
import ProjectsDB from "../../data/projects-db-json";
import ProjectReadmeRenderer from "../../src/common/project-readme-renderer";
import SeoInjectorScript from "../../src/seo-injector-script";

const SingleExploreProject = ({ exploreId, markdownContent }) => {
  return (
    <>
      <SeoInjectorScript />
      <ProjectReadmeRenderer
        projectId={exploreId}
        markdownContent={markdownContent}
      />
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
          explore_id: exploreId,
        },
      })),
    ],
    fallback: true,
    // DOCS: Fallback will stay false because we want to show 404 page if the project is not found
  };
}

export async function getStaticProps({ params }) {
  const singleProjectArr = ProjectsDB.filter(
    (singleProj) => singleProj.route_slug === params.explore_id
  );

  const DOMAIN_NAME = "https://mayank5pande.com";
  const readme_file_path = singleProjectArr[0].readme_file_path;

  // DOCS: Fetch the markdown file content
  const fetchPromise = await fetch(`${DOMAIN_NAME}${readme_file_path}`);
  const textConvPromise = await fetchPromise.text();

  return {
    props: {
      exploreId: params.explore_id,
      markdownContent: textConvPromise.toString(),
    },
  };
}

export default SingleExploreProject;
