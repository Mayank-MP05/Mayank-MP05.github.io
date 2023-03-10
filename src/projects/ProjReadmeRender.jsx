import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { LinksRenderer, ProjectsDB } from "./ProjectsDB";

import { Helmet } from "react-helmet";

const ProjReadmeRender = ({ p_id }) => {
  const [Mkdown, setMkdown] = useState("Loading...");
  const [redir, setredir] = useState(false);
  useEffect(() => {
    let arr = ProjectsDB.filter((el) => el.name === p_id);
    // setMkdown(arr[0].readme);
    if (arr.length === 1) {
      // Fetch the Readme
      // fetch(arr[0].readme)
      fetch("/markdown/car-quality.md")
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
      {/* {redir ? <Redirect to='/projects' /> : ""} */}
      <Helmet>
        <title>Projects | Mayank_MP5</title>
        <meta name="description" content={Mkdown} />
        <meta name="keywords" content={Mkdown} />
      </Helmet>
      <div className="d-flex">{LinksRenderer(p_id)}</div>
      <hr className="my-1" />
      <div className="max-w-100">
        <ReactMarkdown remarkPlugins={[gfm]} children={Mkdown} />
      </div>
    </>
  );
};

export default ProjReadmeRender;
