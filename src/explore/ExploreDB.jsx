import { Redirect } from "react-router-dom";

// importing icons here
import FaceDetction from "./exploreData/face-detection-and-recognition.png";
import SpaceX from "./exploreData/spaceX.png";
import Nemo from "./exploreData/Nemo.png";
import ExamBeep from "./exploreData/exam-beep.png";
import Memes from "./exploreData/memes.png";

// importing markdowns
import MDFaceDetection from "./exploreData/face-detection-and-recognition.md";
import MDSpaceX from "./exploreData/SpaceX.md";
import MDNemo from "./exploreData/Nemo-goa-guide.md";
import MDExamBeep from "./exploreData/exam-beep.md";
import MDMemes from "./exploreData/memes.md";

import LinksBtn from "../common/LinksBtn";

export const LinksRenderer = (p_id) => {
  switch (p_id) {
    case "face-recognition-system":
      return (
        <>
          <LinksBtn
            title={"Github"}
            link={`https://github.com/Mayank-MP05/Deep-Learning-Face-Recognition-ML-DL`}
          />
        </>
      );
    case "spacex-informer":
      return (
        <>
          <LinksBtn
            title={"Live Demo"}
            link={`https://the-spacex-informer.netlify.app/`}
          />
          <LinksBtn
            title={"Github"}
            link={`https://github.com/Mayank-MP05/SpaceX-Info-React-Ionic-App`}
          />
        </>
      );
    case "nemo-goa-guide":
      return (
        <>
          <LinksBtn
            title={"Github"}
            link={`https://github.com/Mayank-MP05/SIH_Goa_Info_Web-Android_App`}
          />
        </>
      );
    case "exam-beep":
      return (
        <>
          <LinksBtn
            title={"Frontend"}
            link={`https://github.com/Mayank-MP05/Exam_Beep_Frontend`}
          />{" "}
          <LinksBtn
            title={"Backend"}
            link={`https://github.com/Mayank-MP05/Exam_Beep_Backend`}
          />
        </>
      );
    default:
      return <Redirect to='/explore' />;
  }
};

export const ExploreDB = [
  {
    name: "face-recognition-system",
    title: "Face Recognition System",
    description:
      "Huffman Compression is commonly used for lossless data compression.In this project,Image and Text Data Compression and Encryption using Huffman technique of freq tree. ",
    img: FaceDetction,
    readme: MDFaceDetection,
    links: LinksRenderer("face-recognition-system"),
  },
  {
    name: "spacex-informer",
    title: "SpaceX Informer App",
    description:
      "Project Built for all india SIH's Toycathon 2021 built in plain stack but feature rich around problem statement of balancing chemical reaction visually and later integrated periodic table",
    img: SpaceX,
    readme: MDSpaceX,
    links: LinksRenderer("spacex-informer"),
  },
  {
    name: "nemo-goa-guide",
    title: "Nemo-The Goa Guide",
    description:
      "Built using Plain Stack and Cordova Wrapper.This Android App lets you updated about the history origin location and picture of this famous tourist attractions",
    img: Nemo,
    readme: MDNemo,
    links: LinksRenderer("nemo-goa-guide"),
  },
  {
    name: "exam-beep",
    title: "Exam Beep Notifier",
    description:
      "Hackathon Project:C olleges just need to post the details in the CSV format and students will be notified.This help reduce overall chaos by acting as one-stop solution",
    img: ExamBeep,
    readme: MDExamBeep,
    links: LinksRenderer("exam-beep"),
  },
  {
    name: "memes",
    title: "Memes-Just for Fun",
    description:
      "Memes and Video Editing archives - JUST FOR FUN - NOT for serious peoples",
    img: Memes,
    readme: MDMemes,
    links: LinksRenderer("memes"),
  },
];
