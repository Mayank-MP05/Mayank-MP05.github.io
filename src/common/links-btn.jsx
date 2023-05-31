import React, { useState, useEffect } from "react";
import Image from "next/image";

const GithubIcon = "/static/common/github-compressed.png";
const FrontendIcon = "/static/common/front-end-compressed.png";
const BackEndIcon = "/static/common/back-end-compressed.png";
const LiveDemoIcon = "/static/common/live-demo-compressed.png";

function LinksBtn({ link, title }) {
  const [Img, setImg] = useState(GithubIcon);
  useEffect(() => {
    switch (title.toLowerCase()) {
      case "github":
        setImg(GithubIcon);
        break;
      case "frontend":
        setImg(FrontendIcon);
        break;
      case "backend":
        setImg(BackEndIcon);
        break;
      case "live demo":
        setImg(LiveDemoIcon);
        break;
      default:
        break;
    }
  }, []);

  return (
    <a href={link} target="_blank" className="btn btn-outline-brown m-1">
      <Image
        src={Img}
        className="on-btn-img"
        width={500}
        height={100}
        alt="on img toggler"
      />
      {title}
    </a>
  );
}

export default LinksBtn;
