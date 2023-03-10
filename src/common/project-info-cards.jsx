import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function ProjectInfoCards({ data, redirectTo }) {
  return (
    <>
      {data && data.title ? (
        <Link
          href={`/${redirectTo ? redirectTo : "explore"}/${data.name}`}
          className="card shadow-lg max-w-450 m-2"
        >
          <div className="pseudo-card">
            <Image
              className="card-img-top w-50 m-auto justify-content-around"
              src={data.img}
              alt={data.description}
              width={200}
              height={200}
            />
            <div className="card-body">
              <h5 className="card-title underline-text font-weight-bold">
                {data.title}
              </h5>
              <p className="card-text">{data.description}</p>
              <div className="d-flex align-items-end">{data.links}</div>
            </div>
          </div>
        </Link>
      ) : (
        "Loading ..."
      )}
    </>
  );
}

export default ProjectInfoCards;
