import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import LinksBtn from "./links-btn";

const ProjectReadmeRenderer = ({
  projectId,
  markdownContent,
  singleProjectDetails,
}) => {
  return (
    <>
      <div className="d-flex">
        {singleProjectDetails?.links_to_show.map((singleLink) => (
          <LinksBtn
            key={singleLink.link_url}
            link={singleLink.link_url}
            title={singleLink.text_to_show}
          />
        ))}
      </div>
      <hr className="my-1" />
      <div className="max-w-100">
        <ReactMarkdown remarkPlugins={[gfm]} children={markdownContent} />
      </div>
    </>
  );
};

export default ProjectReadmeRenderer;
