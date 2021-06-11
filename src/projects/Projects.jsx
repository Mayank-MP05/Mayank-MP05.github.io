import React, { useState, useEffect } from "react";
import "./projects.css";

import OnImgTitle from "../common/OnImgTitile";
import FaceCards from "../common/FaceCards";

import { ProjectsDB } from "./ProjectsDB";

function Projects() {
  return (
    <>
      <OnImgTitle title='Projects' />

      <div className='card-deckX'>
        {ProjectsDB.map((el) => (
          <FaceCards data={el} key={el.title} redirectTo='project' />
        ))}
      </div>
      <hr />
    </>
  );
}

export default Projects;
