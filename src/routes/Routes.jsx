import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={"hello"} />
      </Switch>
    </Router>
  );
};

export default Routes;