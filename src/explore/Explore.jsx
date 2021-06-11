import React, { useState, useEffect } from "react";

import OnImgTitle from "../common/OnImgTitile";
import { ExploreDB } from "./ExploreDB";
import FaceCards from "../common/FaceCards";

function Explore() {
  return (
    <>
      <OnImgTitle
        title='Explore'
        subtitle={
          "These are the things I tried sometimes for learning sometimes for fun😁"
        }
      />

      <hr />
      <div className='card-deckX'>
        {ExploreDB.map((el) => (
          <FaceCards data={el} key={el.title} />
        ))}
      </div>
      <hr />
    </>
  );
}

export default Explore;
