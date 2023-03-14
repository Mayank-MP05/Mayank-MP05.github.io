import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LinksBtn from "./links-btn";

function ProjectInfoCards({ singleProjData, parentTab = "projects" }) {
  return (
    <>
      <Link
        href={`/${parentTab}/${singleProjData.route_slug}`}
        className="card shadow-lg max-w-450 m-2"
      >
        <div className="pseudo-card">
          <Image
            className="card-img-top w-50 m-auto justify-content-around"
            src={singleProjData.static_logo_path}
            alt={singleProjData.description}
            width={200}
            height={200}
          />
          <div className="card-body">
            <h5 className="card-title underline-text font-weight-bold">
              {singleProjData.title}
            </h5>
            <p className="card-text">{singleProjData.description}</p>
            <div className="d-flex align-items-end">
              {singleProjData.links_to_show.map((singleLink) => (
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
