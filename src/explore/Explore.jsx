import React, { useState, useEffect } from "react";

import OnImgTitle from "../common/OnImgTitile";
import { ExploreDB } from "./ExploreDB";
import FaceCards from "../common/FaceCards";
import { Helmet } from "react-helmet";

function Explore() {
  return (
    <>
      <Helmet>
        <title>Explore | Mayank_MP5</title>
        <meta
          name='description'
          content='SDE Portfolio Projects of Mayank Pachpande'
        />
        <meta
          name='keywords'
          content='Codersgram,Mayank memes,face recognition system'
        />
      </Helmet>
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
