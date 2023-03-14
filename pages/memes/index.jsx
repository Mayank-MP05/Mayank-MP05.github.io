import React from "react";
import { useRouter } from "next/router";

const MemePage = () => {
  const Router = useRouter();

  useEffect(() => {
    // DOCS: for memes pages redirect to /explore/memes
    Router.push("/explore/memes");
  }, []);

  return <></>;
};

export default MemePage;
