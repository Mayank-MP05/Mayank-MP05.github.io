import { Redirect } from "react-router-dom";

// importing icons here
import FaceDetction from "./exploreData/face-detection-and-recognition.png";
import SpaceX from "./exploreData/spaceX.png";
import Nemo from "./exploreData/Nemo.png";
import ExamBeep from "./exploreData/exam-beep.png";
import Memes from "./exploreData/memes.png";
import TeamAutomatons from "./exploreData/team-automatons.png";
import Hitech from "./exploreData/hitech-controls.png";
import Unicktoe from "./exploreData/unicktoe.png";

// importing markdowns
import MDFaceDetection from "./exploreData/face-detection-and-recognition.md";
import MDSpaceX from "./exploreData/SpaceX.md";
import MDNemo from "./exploreData/Nemo-goa-guide.md";
import MDExamBeep from "./exploreData/exam-beep.md";
import MDMemes from "./exploreData/memes.md";
import MDteamAuto from "./exploreData/MDteam-automatons.md";
import MDHiTech from "./exploreData/MDHitech-controls.md";
import MDUnicktoe from "./exploreData/MDUnicktoe.md";

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
    case "team-automatons":
      return (
        <>
          <LinksBtn
            title={"Live Demo"}
            link={`https://mayank-mp05.github.io/Team_Automatons_website/`}
          />{" "}
          <LinksBtn
            title={"Github"}
            link={`https://github.com/Mayank-MP05/Team_Automatons_website`}
          />
        </>
      );
    case "hitech-controls":
      return (
        <>
          <LinksBtn
            title={"Live Demo"}
            link={`https://hitech-new.netlify.app/`}
          />{" "}
          <LinksBtn
            title={"Github"}
            link={`https://github.com/Mayank-MP05/HiTech-New`}
          />
        </>
      );
    case "unicktoe":
      return (
        <>
          <LinksBtn
            title={"Live Demo"}
            link={`https://play.google.com/store/apps/details?id=com.firstkit.unicktoe&hl=en_US&gl=US`}
          />{" "}
          <LinksBtn
            title={"Github"}
            link={`https://github.com/Mayank-MP05/U-Nick-Toe`}
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
  {
    name: "team-automatons",
    title: "Team Automatons Website",
    description:
      "PCCOE's Robotics Website designed for Sponsorships and marketing purposes include designing and SEO of the website",
    img: TeamAutomatons,
    readme: MDteamAuto,
    links: LinksRenderer("team-automatons"),
  },
  {
    name: "hitech-controls",
    title: "Hi-Tech Controls website",
    description:
      "They provides various products like Lift inverters, Stabilizers, Solar Rooftop System and other related products. Building their website and SEO for the website",
    img: Hitech,
    readme: MDHiTech,
    links: LinksRenderer("hitech-controls"),
  },
  {
    name: "unicktoe",
    title: "U-Nick-Toe Game",
    description:
      "Two player tic-tac-toe game with the unique twist of having limited pawns so that you have to move the existing ones have 1300 downloads on playstore",
    img: Unicktoe,
    readme: MDUnicktoe,
    links: LinksRenderer("unicktoe"),
  },
];

ExploreDB.sort(() => Math.random() - 0.5);
