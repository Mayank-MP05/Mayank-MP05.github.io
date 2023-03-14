import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Image from "next/image";

const renderTooltip = (content) => (
  <Tooltip id="button-tooltip">{content}</Tooltip>
);

const Singlelink = ({ name, link, img }) => {
  return (
    <div>
      <OverlayTrigger placement="top" overlay={renderTooltip(name)}>
        <a href={link} target="_blank">
          <Image src={img} width={80} height={30} alt="Github Icon" />
        </a>
      </OverlayTrigger>
    </div>
  );
};

export default Singlelink;
