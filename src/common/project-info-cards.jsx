import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LinksBtn from "./links-btn";

function ProjectInfoCards({ data, redirectTo }) {
  return (
    <>
      <Link
        href={`/projects/${data.route_slug}`}
        className="card shadow-lg max-w-450 m-2"
      >
        <div className="pseudo-card">
          <Image
            className="card-img-top w-50 m-auto justify-content-around"
            src={data.static_logo_path}
            alt={data.description}
            width={200}
            height={200}
          />
          <div className="card-body">
            <h5 className="card-title underline-text font-weight-bold">
              {data.title}
            </h5>
            <p className="card-text">{data.description}</p>
            <div className="d-flex align-items-end">
              {data.links_to_show.map((singleLink) => (
                <LinksBtn
                  link={singleLink.link_url}
                  title={singleLink.text_to_show}
                />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProjectInfoCards;
