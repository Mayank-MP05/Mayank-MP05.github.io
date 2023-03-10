import React from "react";
import { Card, Button } from "react-bootstrap";
import Link from "next/link";

const MayankBgEditedIcon = "/static/common/mayank-pachpande-bg-img-edited.jpg";
import Sociallinks from "./Sociallinks";
import Image from "next/image";
const Introcard = () => {
  return (
    <div className="w-100 d-flex shadow-lg p-3 mb-5 bg-white roundedX row m-auto">
      <Card className="left-card no-border m-auto col-md-4 col-sm-12">
        <Card.Body>
          <Image src={MayankBgEditedIcon} width={500} height={500} className />
          <Card.Title>Mayank Pachpande</Card.Title>
          <Card.Text>Software Development Engineer</Card.Text>
          <Link href="/projects" className="font-weight-bold">
            <button className="btn btn-outline-brown  m-1">Projects 🤩</button>
          </Link>{" "}
          <Link href="/explore" className="font-weight-bold">
            <button className="btn btn-outline-brown  m-1">Explore 🧐</button>
          </Link>
        </Card.Body>
      </Card>
      <Card className="m-auto no-border d-flex justify-content-center  col-md-8 col-sm-12">
        <h4>About Me </h4>
        <p>
          &rArr; Loves <span className="bold-text">JavaScript❤️</span>
        </p>
        <p>
          &rArr; Interested in{" "}
          <span className="bold-text">Full Stack Developement</span> and{" "}
          <span className="bold-text">Startups</span>
        </p>
        <p>
          &rArr; Worked mostly on <span className="bold-text">Web Dev</span> and{" "}
          <span className="bold-text">Machine Learning Projects</span>
        </p>
        <p>&rArr; Hobbies - Coding, Video Editing, Memes</p>
        <Sociallinks />
      </Card>
    </div>
  );
};

export default Introcard;
