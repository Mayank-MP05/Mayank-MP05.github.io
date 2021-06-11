import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "./projects.css";

import OnImgTitle from "../common/OnImgTitile";
import ProjCard from "./ProjCard";

//importing icons here
import HulkHuffMan from "./data/hulk-huffman-compression.png";
import Molequilizer from "./data/moliquilizer-logo.png";
import VasooliMoney from "./data/vasooli-money.png";
import MarathiLetterConv from "./data/Marathi-letter-convnet.png";
import CarQuality from "./data/car-quality.png";

// importing markdowns
import MDHulkHuffMan from "./data/Hulk-huffman-compression.md";
import MDMolequilizer from "./data/molequilizer.md";
import MDVasooliMoney from "./data/vasooli-money.md";
import MDMarathiLetterConv from "./data/Marathi-letter-convnet.md";
import MDCarQuality from "./data/car-quality.md";
import { ProjectsDB } from "./ProjectsDB";

function Projects() {
  return (
    <>
      <OnImgTitle title='Projects' />

      <div className='card-deckX'>
        {ProjectsDB.map((el) => (
          <ProjCard data={el} key={el.title} />
        ))}
      </div>
      <hr />

    </>
  );
}

export default Projects;
