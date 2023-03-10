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

import LinksBtn from "../common/LinksBtn";

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
    default:
      return <></>;
  }
};

export const ProjectsDB = [
  {
    name: "hulk-huffman-compressor",
    title: "Hulk Compressor",
    description:
      "Huffman Compression is commonly used for lossless data compression.In this project,Image and Text Data Compression and Encryption using Huffman technique of freq tree. ",
    img: HulkHuffMan,
    readme: MDHulkHuffMan,
    links: LinksRenderer("hulk-huffman-compressor"),
  },
  {
    name: "molequilizer",
    title: "Team Molequilzer",
    description:
      "Project Built for all india SIH's Toycathon 2021 built in plain stack but feature rich around problem statement of balancing chemical reaction visually and later integrated periodic table",
    img: Molequilizer,
    readme: MDMolequilizer,
    links: LinksRenderer("molequilizer"),
  },
  {
    name: "vasooli-money-manager",
    title: "Vasooli Money Manager",
    description:
      "This is full flesh money manager app.This app lets us track all your transactions and cash flows whether you spend it or lend it to someone or from someone",
    img: VasooliMoney,
    readme: MDVasooliMoney,
    links: LinksRenderer("vasooli-money-manager"),
  },
  {
    name: "marathi-letter-recognition",
    title: "Marathi Recognition",
    description:
      "Project uses Deep Learning based character recognition. The flask web server is used to minimize complexities.The drawn character on the Canvas will be recognized",
    img: MarathiLetterConv,
    readme: MDMarathiLetterConv,
    links: LinksRenderer("marathi-letter-recognition"),
  },
  {
    name: "car-quality-prediction",
    title: "Car Quality Prediction",
    description:
      "Using Decision Tree and SVM to really process the input attributes of the car sent over flask server and displaying the predicted output (Categorical Nature)",
    img: CarQuality,
    readme: MDCarQuality,
    links: LinksRenderer("car-quality-prediction"),
  },
];
ProjectsDB.sort(() => Math.random() - 0.5);
