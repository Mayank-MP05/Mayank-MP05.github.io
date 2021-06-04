import React from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

import LinksDB from "./LinksDB";
import Singlelink from "./Singlelink";

function Sociallinks() {
  return (
    <div
      className='shadow-sm p-3 bg-white rounded social-links m-auto'
      style={{ marginBottom: "10px" }}>
      {LinksDB.map((el) => (
        <Singlelink {...el} />
      ))}
    </div>
  );
}

export default Sociallinks;
