import React from "react";
import ProjReadmeRender from "../../src/projects/ProjReadmeRender";

const SingleExploreProject = ({ explore_id }) => {
  return (
    <>
      <ProjReadmeRender p_id={explore_id} />
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { explore_id: "1" } }],
    fallback: true,
    // DOCS: Fallback will stay false because we want to show 404 page if the project is not found
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      explore_id: params.explore_id,
    },
  };
}

export default SingleExploreProject;
