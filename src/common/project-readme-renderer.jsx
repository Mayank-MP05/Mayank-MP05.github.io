import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import ProjectsDB from "../../data/projects-db-json";

const ProjectReadmeRenderer = ({ projectId, markdownContent }) => {
  const [Mkdown, setMkdown] = useState("Loading...");
  const [redir, setredir] = useState(false);
  useEffect(() => {
    let arr = ProjectsDB.filter((el) => el.route_slug === projectId);
    // setMkdown(arr[0].readme);
    if (arr.length === 1) {
      // Fetch the Readme
      // fetch(arr[0].readme)
      fetch(arr[0].readme_file_path)
        .then((res) => res.text())
        .then((text) => {
          // console.log(text);
          setMkdown(text);
        });
    } else {
      setredir(true);
    }
  }, []);

  return (
    <>
      {/* <div className="d-flex">{LinksRenderer(projectId)}</div> */}
      <hr className="my-1" />
      <div className="max-w-100">
        <ReactMarkdown remarkPlugins={[gfm]} children={markdownContent} />
      </div>
    </>
  );
};

export default ProjectReadmeRenderer;
