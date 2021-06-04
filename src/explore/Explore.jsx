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

const projectLinks = (idx) => {
  switch (idx) {
    case 0:
      return (
        <p className='card shadow-lg bg-white p-2'>
          Github Repo :{" "}
          <a href='https://github.com/Mayank-MP05/Deep-Learning-Face-Recognition-ML-DL'>
            https://github.com/Mayank-MP05/Deep-Learning-Face-Recognition-ML-DL
          </a>
        </p>
      );
    case 1:
      return (
        <p className='card shadow-lg bg-white p-2'>
          Github Repo :{" "}
          <a href='https://github.com/Mayank-MP05/SpaceX-Info-React-Ionic-App'>
            https://github.com/Mayank-MP05/SpaceX-Info-React-Ionic-App
          </a>
        </p>
      );
    case 2:
      return (
        <p className='card shadow-lg bg-white p-2'>
          Github Frontend Repo :{" "}
          <a href='https://github.com/Mayank-MP05/SIH_Goa_Info_Web-Android_App'>
            https://github.com/Mayank-MP05/SIH_Goa_Info_Web-Android_App
          </a>
        </p>
      );
    case 3:
      return (
        <p className='card shadow-lg bg-white p-2'>
          Github Frontend Repo :{" "}
          <a href='https://github.com/Mayank-MP05/Exam_Beep_Frontend'>
            https://github.com/Mayank-MP05/Exam_Beep_Frontend
          </a>
          Github Backend Repo :{" "}
          <a href='https://github.com/Mayank-MP05/Exam_Beep_Backend'>
            https://github.com/Mayank-MP05/Exam_Beep_Backend
          </a>
        </p>
      );

    default:
      return "";
  }
};

function Explore() {
  const [ActiveProject, setActiveProject] = useState(0);
  const [Mkdown, setMkdown] = useState("Loading....");
  const MkdownArr = [MDFaceDetection, MDSpaceX, MDNemo, MDExamBeep, MDMemes];

  useEffect(() => {
    let idx = ActiveProject;
    fetch(MkdownArr[idx])
      .then((res) => res.text())
      .then((text) => {
        console.log(text);
        setMkdown(text);
      });
  }, [ActiveProject]);

  return (
    <>
      <div className='bg-img'>
        <h3>Explore</h3>
        <p>
          These are the things I tried sometimes for learning sometimes for
          fun😁
        </p>
      </div>
      <div className='project-navigation'>
        <img
          src={FaceDetction}
          className='project-logo'
          onClick={() => setActiveProject(0)}
        />
        <img
          src={SpaceX}
          className='project-logo'
          onClick={() => setActiveProject(1)}
        />
        <img
          src={Nemo}
          className='project-logo'
          onClick={() => setActiveProject(2)}
        />
        <img
          src={ExamBeep}
          className='project-logo'
          onClick={() => setActiveProject(3)}
        />
        <img
          src={Memes}
          className='project-logo'
          onClick={() => setActiveProject(4)}
        />
      </div>
      <div className='m-2'>{projectLinks(ActiveProject)}</div>
      <hr />
      <div className='container readme'>
        {" "}
        <ReactMarkdown remarkPlugins={[gfm]} children={Mkdown} />
      </div>
    </>
  );
}

export default Explore;
