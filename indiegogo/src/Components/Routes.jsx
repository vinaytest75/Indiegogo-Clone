import React from "react";
import { Switch, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./RouteComponents/Home";
import { Explore } from "./RouteComponents/Explore";
import { WhatWeDo } from "./RouteComponents/WhatWeDo";
import { Search } from "./RouteComponents/Search";
import { ForEntrepreneurs } from "./RouteComponents/ForEntrepreneurs";
import { Campaign } from "./RouteComponents/Campaign";
import { Login } from "./RouteComponents/Login";

const Routes = () => {
  return (
    <>
      <Navbar />
      {/* <Switch>
        <Route path="/explore" component={(props) => <Explore {...props} />} />
        <Route
          path="/whatwedo"
          component={(props) => <WhatWeDo {...props} />}
        />
        <Route path="/search" component={(props) => <Search {...props} />} />
        <Route
          path="/entrepreneurs"
          component={(props) => <ForEntrepreneurs {...props} />}
        />
        <Route
          path="/campaign"
          component={(props) => <Campaign {...props} />}
        />
        <Route path="/login" component={(props) => <Login {...props} />} />
        <Route path="/" component={(props) => <Home {...props} />} />
      </Switch> */}
    </>
  );
};

export { Routes };
