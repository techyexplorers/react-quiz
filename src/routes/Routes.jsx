import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import LetsStart from "../pages/LetsStart/LetsStart";
import Login from "../pages/Login/Login";
import Play from "../pages/Play/Play";
import Tutorial from "../pages/Tutorial/Tutorial";
import GameOver from "../pages/GameOver/GameOver";
import Dashboard from "../pages/Dashboard/Dashboard";
import Summary from "../pages/Summary/Summary";

const Routes = () => {
  const [user, setUser] = useState();
  const userObj = JSON.parse(localStorage.getItem("user"));
  return (
    <Router>
      <Layout user={user} setUser={setUser}>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home {...props} user={userObj} />}
          />
          <Route
            path="/about"
            render={(props) => <About {...props} user={userObj} />}
          />
          <Route
            path="/play"
            render={(props) => <Play {...props} user={userObj} />}
          />
          <Route
            path="/login"
            render={(props) => (
              <Login {...props} user={userObj} setUser={setUser} />
            )}
          />
          <Route
            path="/tutorial"
            render={(props) => <Tutorial {...props} user={userObj} />}
          />
          <Route
            path="/start"
            render={(props) => (
              <LetsStart {...props} user={userObj} setUser={setUser} />
            )}
          />
          <Route
            path="/game-over"
            render={(props) => (
              <GameOver {...props} user={userObj} setUser={setUser} />
            )}
          />
          <Route
            path="/dashboard"
            render={(props) => (
              <Dashboard {...props} user={userObj} setUser={setUser} />
            )}
          />
          <Route
            path="/summary"
            render={(props) => (
              <Summary {...props} user={userObj} setUser={setUser} />
            )}
          />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Routes;
