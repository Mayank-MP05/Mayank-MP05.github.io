import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const renderTooltip = (content) => (
  <Tooltip id='button-tooltip'>{content}</Tooltip>
);

const Singlelink = ({ name, link, img }) => {
  return (
    <div>
      <OverlayTrigger placement='top' overlay={renderTooltip(name)}>
        <a href={link} target='_blank'>
          <img src={img} />
        </a>
      </OverlayTrigger>
    </div>
  );
};

export default Singlelink;
