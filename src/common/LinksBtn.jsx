import React, { useState, useEffect } from "react";
import Image from "next/image";

import Github from "./img/github.png";
import Frontend from "./img/front-end.png";
import BackEnd from "./img/backend.png";
import LiveDemo from "./img/live-demo.png";

function LinksBtn({ link, title }) {
  const [Img, setImg] = useState(Github);
  useEffect(() => {
    switch (title.toLowerCase()) {
      case "github":
        setImg(Github);
        break;
      case "frontend":
        setImg(Frontend);
        break;
      case "backend":
        setImg(BackEnd);
        break;
      case "live demo":
        setImg(LiveDemo);
        break;
      default:
        break;
    }
  }, []);

  return (
    <a href={link} target="_blank" className="btn btn-outline-brown m-1">
      <Image src={Img} className="on-btn-img" />
      {title}
    </a>
  );
}

export default LinksBtn;
