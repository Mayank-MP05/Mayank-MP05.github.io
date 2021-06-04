import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import MayankImg from "./Mayank-Pachpande-bg-img-edited.jpg";
import Sociallinks from "./Sociallinks";
function Introcard() {
  return (
    <div className='w-100 d-flex shadow-lg p-3 mb-5 bg-white rounded row m-auto'>
      <Card className='left-card no-border m-auto col-md-4 col-sm-12'>
        <Card.Img variant='top' src={MayankImg} className='mayank-img' />
        <Card.Body>
          <Card.Title>Mayank Pachpande</Card.Title>
          <Card.Text>Software Development Engineer</Card.Text>
          <Link to='/projects' className='font-weight-bold'>
            <button className='btn btn-outline-warning  m-1'>
              Projects ⏩
            </button>
          </Link>
        </Card.Body>
      </Card>
      <Card className='m-auto no-border d-flex justify-content-center  col-md-8 col-sm-12'>
        <h4>About Me </h4>
        <p>
          &rArr; Loves <span class='bold-text'>JavaScript❤️</span>
        </p>
        <p>
          &rArr; Interested in{" "}
          <span class='bold-text'>Full Stack Developement</span> and{" "}
          <span class='bold-text'>Startups</span>
        </p>
        <p>
          &rArr; Worked mostly on <span class='bold-text'>Web Dev</span> and{" "}
          <span class='bold-text'>Machine Learning Projects</span>
        </p>
        <p>&rArr; Hobbies - Coding, Video Editing, Memes</p>
        <Sociallinks />
      </Card>
    </div>
  );
}

export default Introcard;
