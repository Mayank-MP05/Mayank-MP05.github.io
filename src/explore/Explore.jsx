import React, { useState, useEffect } from "react";

import OnImgTitleHeader from "../common/on-img-title-header";
import { ExploreDB } from "./ExploreDB";
import ProjectInfoCards from "../common/project-info-cards";
import { Helmet } from "react-helmet";

const Explore = () => {
  return (
    <>
      <Helmet>
        <title>Explore | Mayank_MP5</title>
        <meta
          name="description"
          content="SDE Portfolio Projects of Mayank Pachpande"
        />
        <meta
          name="keywords"
          content="Codersgram,Mayank memes,face recognition system"
        />
      </Helmet>
      <OnImgTitleHeader
        title="Explore"
        subtitle={
          "These are the things I tried sometimes for learning sometimes for fun😁"
        }
      />

      <hr />
      <div className="card-deckX">
        {ExploreDB.map((el) => (
          <ProjectInfoCards data={el} key={el.title} />
        ))}
      </div>
      <hr />
    </>
  );
};

export default Explore;
