import react from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Home from "./home/Home";
import Projects from "./projects/Projects";
import Explore from "./explore/Explore";

const Routes = () => {
  return (
    <Switch>
      <Route path='/home'>
        <Home />
      </Route>{" "}
      <Route path='/projects'>
        <Projects />
      </Route>{" "}
      <Route path='/explore'>
        <Explore />
      </Route>
      <Route exact path='/'>
        <Redirect to='/home' />
      </Route>
    </Switch>
  );
};

export default Routes;
