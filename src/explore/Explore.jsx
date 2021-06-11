import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

// importing Icons
import FaceDetction from "./exploreData/face-detection-and-recognition.png";
import SpaceX from "./exploreData/spaceX.png";
import Nemo from "./exploreData/Nemo.png";
import ExamBeep from "./exploreData/exam-beep.png";
import Memes from "./exploreData/memes.png";

// Importing Readme
import MDFaceDetection from "./exploreData/face-detection-and-recognition.md";
import MDSpaceX from "./exploreData/SpaceX.md";
import MDNemo from "./exploreData/Nemo-goa-guide.md";
import MDExamBeep from "./exploreData/exam-beep.md";
import MDMemes from "./exploreData/memes.md";

import OnImgTitle from "../common/OnImgTitile";
import { ExploreDB } from "./ExploreDB";
import ExploreCard from "./ExploreCard";

function Explore() {
  const [ActiveProject, setActiveProject] = useState(0);
  const [Mkdown, setMkdown] = useState("Loading....");
  const MkdownArr = [MDFaceDetection, MDSpaceX, MDNemo, MDExamBeep, MDMemes];

  return (
    <>
      <OnImgTitle
        title='Explore'
        subtitle={
          "These are the things I tried sometimes for learning sometimes for fun😁"
        }
      />

      <hr />
      <div className='card-deckX'>
        {ExploreDB.map((el) => (
          <ExploreCard data={el} key={el.title} />
        ))}
      </div>
      <hr />
    </>
  );
}

export default Explore;
