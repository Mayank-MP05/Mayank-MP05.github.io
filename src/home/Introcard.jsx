import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import MayankImg from "./linked-in-dp-gray-bg.png";
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
        <p>- Loves JavaScript❤️</p>
        <p>- Interested in Full Stack Developement and Full Stack</p>
        <p>- Worked mostly on Web Dev and Machine Learning Projects</p>
        <p>- Hobbies - Coding,Video Editing,Memes</p>
        <Sociallinks />
      </Card>
    </div>
  );
}

export default Introcard;
