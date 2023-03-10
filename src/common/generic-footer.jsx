import { Navbar } from "react-bootstrap";

const GenericFooter = () => {
  return (
    <Navbar
      bg="light"
      expand="sm"
      className="d-flex justify-content-center flex-​column top-border-red"
    >
      <div className="container">
        {" "}
        <p className="text-black ">Made with Next JS 13</p>
        <br />
        <p className="text-black">
          Contact :{" • "}
          <a href="mailto:mayank5pande@gmail.com" className="text-black">
            Email
          </a>
          {" • "}
          <a
            href="https://www.linkedin.com/in/mayank-mp5/"
            className="text-black"
          >
            LinkedIn
          </a>
          {" • "}
          <a href="https://github.com/Mayank-MP05" className="text-black">
            Github
          </a>
        </p>
      </div>
    </Navbar>
  );
};

export default GenericFooter;
