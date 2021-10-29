import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Play from "../pages/Play/Play";

const Routes = () => {
  const [user, setUser] = useState();
  return (
    <Router>
      <Layout user={user} setUser={setUser}>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home {...props} user={user} />}
          />
          <Route
            path="/play"
            render={(props) => <Play {...props} user={user} />}
          />
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} user={user} setUser={setUser} />
            )}
          />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
