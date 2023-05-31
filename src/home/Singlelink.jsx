import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Image from "next/image";

const renderTooltip = (content) => (
  <Tooltip id="button-tooltip">{content}</Tooltip>
);

const SingleLink = ({ name, link, img }) => {
  return (
    <div>
      <OverlayTrigger placement="top" overlay={renderTooltip(name)}>
        <a href={link} target="_blank">
          <Image src={img} width={80} height={30} alt={name} />
        </a>
      </OverlayTrigger>
    </div>
  );
};

export default SingleLink;
