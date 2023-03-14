import React from "react";
import ProjectsDB from "../../data/projects-db-json";
import GenericProjectGallery from "../../src/common/project-gallery";
import SeoInjectorScript from "../../src/seo-injector-script";

const ProjectsPage = ({ projectsList, title }) => {
  return (
    <>
      <SeoInjectorScript />
      <GenericProjectGallery title={title} projectsList={projectsList} />
    </>
  );
};

export async function getStaticProps(context) {
  const projectsFiltered = ProjectsDB.filter(
    (project) => project.project_tab === "EXPLORE"
  );
  return {
    props: {
      projectsList: projectsFiltered,
      title: `Explore`,
    },
  };
}

export default ProjectsPage;
