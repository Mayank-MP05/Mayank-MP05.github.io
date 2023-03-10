import React from "react";

const SingleProjectComponent = ({ project_id }) => {
  return <div>project_id: {project_id}</div>;
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { project_id: "1" } }],
    fallback: true,
    // DOCS: Fallback will stay false because we want to show 404 page if the project is not found
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      project_id: params.project_id,
    },
  };
}

export default SingleProjectComponent;
