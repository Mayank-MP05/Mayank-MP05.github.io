import React, { useState, useEffect } from "react";

import Github from "../common/img/github.png";
import Frontend from "../common/img/front-end.png";
import BackEnd from "../common/img/backend.png";
import LiveDemo from "../common/img/live-demo.png";

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
    <a href={link} className='btn btn-outline-brown m-1'>
      <img src={Img} className='on-btn-img' />
      {title}
    </a>
  );
}

export default LinksBtn;
