import React from "react";

import linkedin from "./logos/linkedin.png";
import github from "./logos/github.png";
import gmail from "./logos/gmail.png";

import codechef from "./logos/codechef.png";
import codeforces from "./logos/codeforces.png";
import call from "./logos/call.png";

import medium from "./logos/medium.png";
import devfolio from "./logos/devfolio.png";
import twitter from "./logos/twitter.png";

import resume from "./logos/resume.png";

function Sociallinks() {
  return (
    <div className='shadow-sm p-3 mb-5 bg-white rounded social-links'>
      <a
        href='https://drive.google.com/file/d/1o4fcfhSdADrUXuGFrd313IxEnMh62NHk/view?usp=sharing'
        target='_blank'>
        <img src={resume} />
      </a>
      <a href='https://www.linkedin.com/in/mayank-mp5/' target='_blank'>
        <img src={linkedin} />
      </a>
      <a href='https://github.com/Mayank-MP05' target='_blank'>
        <img src={github} />
      </a>{" "}
      <a href='mailto:mayank5pande@gmail.com' target='_blank'>
        <img src={gmail} />
      </a>
      <a href='https://www.codechef.com/users/mayank_mp5' target='_blank'>
        <img src={codechef} />
      </a>
      <a href='https://codeforces.com/profile/Mayank_MP5' target='_blank'>
        <img src={codeforces} />
      </a>{" "}
      <a href='tel:8830764295' target='_blank'>
        <img src={call} />
      </a>
      <a href='https://medium.com/@mayank5pande' target='_blank'>
        <img src={medium} />
      </a>
      <a href='https://devfolio.co/@mayank_mp5' target='_blank'>
        <img src={devfolio} />
      </a>{" "}
      <a href='https://twitter.com/Mayank_MP5' target='_blank'>
        <img src={twitter} />
      </a>
    </div>
  );
}

export default Sociallinks;
