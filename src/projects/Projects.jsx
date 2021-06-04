import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import "./projects.css";

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

const projectLinks = (idx) => {
  switch (idx) {
    case 0:
      return (
        <p className='card shadow-lg bg-white p-2'>
          Frontend Github Repo :{" "}
          <a href='https://github.com/AIMNet-ai/Hulk-Compressor-Frontend'>
            https://github.com/AIMNet-ai/Hulk-Compressor-Frontend
          </a>
          Backend Github Repo :{" "}
          <a href='https://github.com/AIMNet-ai/Compress-Encrypt-Backend'>
            https://github.com/AIMNet-ai/Compress-Encrypt-Backend
          </a>
        </p>
      );
    case 1:
      return (
        <p className='card shadow-lg bg-white p-2'>
          Github Repo :{" "}
          <a href='https://github.com/Mayank-MP05/molequilizer'>
            https://github.com/Mayank-MP05/molequilizer
          </a>
        </p>
      );
    case 2:
      return (
        <p className='card shadow-lg bg-white p-2'>
          Frontend Github Repo :{" "}
          <a href='https://github.com/Mayank-MP05/Vasooli-Money-Manager-and-Accounting-Solution-React-Firebase'>
            https://github.com/Mayank-MP05/Vasooli-Money-Manager-and-Accounting-Solution-React-Firebase
          </a>
          Backend Github Repo :{" "}
          <a href='https://github.com/Mayank-MP05/Vasooli-Express-Firebase-functions'>
            https://github.com/Mayank-MP05/Vasooli-Express-Firebase-functions
          </a>
        </p>
      );
    case 3:
      return (
        <p className='card shadow-lg bg-white p-2'>
          Github Repo :{" "}
          <a href='https://github.com/Mayank-MP05/Marathi-Letter-Recognition-ConvNet'>
            https://github.com/Mayank-MP05/Marathi-Letter-Recognition-ConvNet
          </a>
        </p>
      );
    case 4:
      return (
        <p className='card shadow-lg bg-white p-2'>
          Github Repo :{" "}
          <a href='https://github.com/Mayank-MP05/Car-Quality-Full-Stack-ML-Project'>
            https://github.com/Mayank-MP05/Car-Quality-Full-Stack-ML-Project
          </a>
        </p>
      );
    default:
      return "";
  }
};

function Projects() {
  const [ActiveProject, setActiveProject] = useState(0);
  const [Mkdown, setMkdown] = useState("Loading....");

  const MkdownArr = [
    MDHulkHuffMan,
    MDMolequilizer,
    MDVasooliMoney,
    MDMarathiLetterConv,
    MDCarQuality,
  ];

  const GithubLinks = [
    ,
    "https://github.com/Mayank-MP05/molequilizer",
    "https://github.com/Mayank-MP05/Vasooli-Money-Manager-and-Accounting-Solution-React-Firebase",
    "https://github.com/Mayank-MP05/Marathi-Letter-Recognition-ConvNet",
    "https://github.com/Mayank-MP05/Car-Quality-Full-Stack-ML-Project",
  ];

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
        <h3>Projects</h3>
      </div>
      <div className='project-navigation'>
        <img
          src={HulkHuffMan}
          className='project-logo'
          onClick={() => setActiveProject(0)}
        />
        <img
          src={Molequilizer}
          className='project-logo'
          onClick={() => setActiveProject(1)}
        />
        <img
          src={VasooliMoney}
          className='project-logo'
          onClick={() => setActiveProject(2)}
        />
        <img
          src={MarathiLetterConv}
          className='project-logo'
          onClick={() => setActiveProject(3)}
        />
        <img
          src={CarQuality}
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

export default Projects;
