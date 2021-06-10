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

import LinksBtn from "./LinksBtn";

export const LinksRenderer = (p_id) => {
  switch (p_id) {
    case "hulk-huffman-compressor":
      return (
        <>
          <LinksBtn
            title={"Live Demo"}
            link={`https://hulk-huffman-compressor.netlify.app/`}
          />
          <LinksBtn
            title={"Frontend"}
            link={`https://github.com/Mayank-MP05/Hulk-Compressor-Frontend`}
          />
          <LinksBtn
            title={"Backend"}
            link={`https://github.com/Mayank-MP05/Hulk-Huffman-Backend`}
          />
        </>
      );
    case "molequilizer":
      return (
        <>
          <LinksBtn
            title={"Live Demo"}
            link={`https://team-molequilizer.web.app/`}
          />
          <LinksBtn
            title={"Github"}
            link={`https://github.com/Mayank-MP05/molequilizer`}
          />
        </>
      );
    case "vasooli-money-manager":
      return (
        <>
          <LinksBtn
            title={"Live Demo"}
            link={`https://vasoolimoney.web.app/`}
          />
          <LinksBtn
            title={"Frontend"}
            link={`https://github.com/Mayank-MP05/Vasooli-Money-Manager-and-Accounting-Solution-React-Firebase`}
          />
          <LinksBtn
            title={"Backend"}
            link={`https://github.com/Mayank-MP05/Vasooli-Express-Firebase-functions`}
          />
        </>
      );
    case "marathi-letter-recognition":
      return (
        <>
          <LinksBtn
            title={"Github"}
            link={`https://github.com/Mayank-MP05/Marathi-Letter-Recognition-ConvNet`}
          />
        </>
      );
    case "car-quality-prediction":
      return (
        <>
          <LinksBtn
            title={"Live Demo"}
            link={`https://car-quality-prediction.herokuapp.com/`}
          />
          <LinksBtn
            title={"Github"}
            link={`https://github.com/Mayank-MP05/Car-Quality-Full-Stack-ML-Project`}
          />
        </>
      );
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
      "This is full flesh money manager app.This app lets us track all your transactions and cash flows whether you spend it or lend it to someone or from someone",
    img: Nemo,
    readme: MDNemo,
    links: LinksRenderer("nemo-goa-guide"),
  },
  {
    name: "exam-beep",
    title: "Exam Beep Notifier",
    description:
      "Project uses Deep Learning based character recognition. The flask web server is used to minimize complexities.You can draw the character on the Canvas and model will predict the character",
    img: ExamBeep,
    readme: MDExamBeep,
    links: LinksRenderer("exam-beep"),
  },
  {
    name: "memes",
    title: "Memes-Just for Fun",
    description:
      "Using Decision Tree and SVM to really process the input attributes of the car sent over flask server and displaying the predicted output (Categorical Nature)",
    img: Memes,
    readme: MDMemes,
    links: LinksRenderer("memes"),
  },
];
