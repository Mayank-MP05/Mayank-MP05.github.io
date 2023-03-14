import React, { useState, useEffect } from "react";

import OnImgTitleHeader from "./on-img-title-header";
import ProjectInfoCards from "./project-info-cards";

const GenericProjectGallery = ({
  title = "Projects",
  projectsList = [],
  tabId = "PROJECTS",
}) => {
  return (
    <>
      <OnImgTitleHeader title={title} />

      <div className="card-deckX">
        {projectsList.map((singleProjectData) => (
          <ProjectInfoCards
            singleProjData={singleProjectData}
            key={singleProjectData.route_slug}
            parentTab={`${title.toLowerCase()}`}
          />
        ))}
      </div>
      <hr />
    </>
  );
};

export default GenericProjectGallery;
