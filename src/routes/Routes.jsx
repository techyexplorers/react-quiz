import React from "react";
import Home from "../pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
