import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Profile from "./containers/Profile";
import Order from "./containers/Order";
import Community from "./containers/Community";

import BasicLayout from "./layout/BasicLayout";

const App = () => {
  return (
    <div className="App">
      <Router>
        <BasicLayout />
        <Route exact path="/" component={Profile} />
        <Route path="/order" component={Order} />
        <Route path="/community" component={Community} />
      </Router>
    </div>
  );
};

export default App;
