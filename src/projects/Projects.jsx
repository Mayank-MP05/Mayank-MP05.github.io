import React, { useState, useEffect } from "react";

import OnImgTitleHeader from "../common/on-img-title-header";
import ProjectInfoCards from "../common/project-info-cards";

import { ProjectsDB } from "./ProjectsDB";
import { Helmet } from "react-helmet";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Mayank_MP5</title>
        <meta
          name="description"
          content="SDE Portfolio Projects of Mayank Pachpande"
        />
        <meta
          name="keywords"
          content="SpaceX informer,Hulk-huffman compressor,Molequilizer,Marathi Letter Detection"
        />
      </Helmet>
      <OnImgTitleHeader title="Projects" />

      <div className="card-deckX">
        {ProjectsDB.map((el) => (
          <ProjectInfoCards data={el} key={el.title} redirectTo="projects" />
        ))}
      </div>
      <hr />
    </>
  );
};

export default Projects;
