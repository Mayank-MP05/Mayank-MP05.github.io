import react from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavbarX from "./common/Navbar";
import FooterX from "./common/Footer";
import Routes from "./Routes";

function App() {
  return (
    <>
      <Router>
        <NavbarX />
        <div className='container m-auto p-3'>
          {" "}
          <Routes />
        </div>
        <FooterX />
      </Router>
    </>
  );
}

export default App;
