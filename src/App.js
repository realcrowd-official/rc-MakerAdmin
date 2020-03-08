import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Profile from "./containers/Profile";
import Order from "./containers/Order";
import Community from "./containers/Community";
import Projects from "./containers/Projects";

import BasicLayout from "./layout/BasicLayout";

const App = () => {
  return (
    <>
      <Helmet>
        <title>미르</title>
        <meta charSet="utf-8" />
      </Helmet>
      <div className="App">
        <Router>
          <BasicLayout />
          <Route exact path="/" component={Profile} />
          <Route path="/community" component={Community} />
          <Route path="/projects/list" component={Projects} />
          <Route path="/projects/order" component={Order} />
        </Router>
      </div>
    </>
  );
};

export default App;
