import React, { useState, useEffect } from "react";

import OnImgTitleHeader from "../common/on-img-title-header";
import ProjectInfoCards from "../common/project-info-cards";

import ProjectsDB from "../../data/projects-db-json";

const Projects = () => {
  return (
    <>
      <OnImgTitleHeader title="Projects" />

      <div className="card-deckX">
        {ProjectsDB.map((el) => (
          <ProjectInfoCards data={el} key={el.route_slug} redirectTo="projects" />
        ))}
      </div>
      <hr />
    </>
  );
};

export default Projects;
