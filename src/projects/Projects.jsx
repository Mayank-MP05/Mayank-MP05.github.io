import React, { useState, useEffect } from "react";

import OnImgTitle from "../common/OnImgTitile";
import FaceCards from "../common/FaceCards";

import { ProjectsDB } from "./ProjectsDB";
import { Helmet } from "react-helmet";

const Projects = ( ) => {
  return (
    <>
      <Helmet>
        <title>Projects | Mayank_MP5</title>
        <meta
          name='description'
          content='SDE Portfolio Projects of Mayank Pachpande'
        />
        <meta
          name='keywords'
          content='SpaceX informer,Hulk-huffman compressor,Molequilizer,Marathi Letter Detection'
        />
      </Helmet>
      <OnImgTitle title='Projects' />

      <div className='card-deckX'>
        {ProjectsDB.map((el) => (
          <FaceCards data={el} key={el.title} redirectTo='projects' />
        ))}
      </div>
      <hr />
    </>
  );
}

export default Projects;
