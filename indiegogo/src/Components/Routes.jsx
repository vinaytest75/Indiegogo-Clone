import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./RouteComponents/Home";
import { WhatWeDo } from "./RouteComponents/WhatWeDo";
import { Search } from "./RouteComponents/Search";
import { ForEntrepreneurs } from "./RouteComponents/ForEntrepreneurs";
import { Campaign } from "./RouteComponents/Campaign";
import { Footer } from "./Footer";
import { ExploreProducts } from "./ExploreProject/Project";

const Routes = () => {
  return (
    <>
      <Navbar />
      <hr
        style={{
          border: "1px solid lightgrey",
          marginLeft: "-8px",
          width: "105%",
          borderBottom: "none",
        }}
      />
      <Switch>
        <Route
          path="/whatwedo"
          component={(props) => <WhatWeDo {...props} />}
        />
        {/* <Route path="/search" component={(props) => <Search {...props} />} />
        <Route
          path="/entrepreneurs"
          component={(props) => <ForEntrepreneurs {...props} />}
        /> */}
        <Route
          path="/campaign"
          component={(props) => <Campaign {...props} />}
        />
        <Route
          exact
          path="/explore_products"
          render={(props) => <ExploreProducts {...props} />}
        />
        <Route exact path="/" component={(props) => <Home {...props} />} />
      </Switch>
      <Footer />
    </>
  );
};

export { Routes };
