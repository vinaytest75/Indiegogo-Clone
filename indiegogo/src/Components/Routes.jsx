import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./RouteComponents/Home";
import { WhatWeDo } from "./RouteComponents/WhatWeDo";
import { Search } from "./RouteComponents/Search";
import { ForEntrepreneurs } from "./RouteComponents/ForEntrepreneurs";
import { Campaign } from "./RouteComponents/Campaign";
import { Footer } from "./Footer";
import CollectionsPage from "./HomeComponents/Collections/CollectionsPage"
import DeatiledAdvertisementRoutes from "./HomeComponents/popularProductsPageExtended/deatiledAdvertisement/DeatiledAdvertisementRoutes"
import Story from "./HomeComponents/popularProductsPageExtended/deatiledAdvertisement/deatiledAdvertisementComponents/Story"
import Faq from "./HomeComponents/popularProductsPageExtended/deatiledAdvertisement/deatiledAdvertisementComponents/Faq"
import PopularProductsPage from "./HomeComponents/popularProductsPageExtended/PopularProductsPage"
import { ExploreProducts } from "./ExploreProject/Project";
const Routes = () => {
  return (
    <>
      <Navbar />
      {/* <Link to = "/popularPage" style = {{textDecoration: "none"}}>
                  SEE COLLECTION
                </Link> */}
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
        {/* <Route path = "/popularPage" render = {(props) => <PopularProductsPage {...props} />} /> */}
        <Route path="/" exact render ={(props) => <Home {...props} />} />
        <Route path = "/collections" render = {(props) => <CollectionsPage {...props} />} />
        <Route
          exact
          path="/explore_products"
          render={(props) => <ExploreProducts {...props} />}
        />
        <Route exact path="/" component={(props) => <Home {...props} />} />
      </Switch>
      <Route path = "/popularPage" render = {(props) => <PopularProductsPage {...props} />} />
      <Route path = "/popularPage/story" render = {(props) => <Story {...props} /> } />
        <Route path = "/popularPage/faq" render = {(props) => <Faq {...props} /> } />
      {/* <Switch>
        <Route path = "/popularPage/story" render = {(props) => <Story {...props} /> } />
        <Route path = "/popularPage/faq" render = {(props) => <Faq {...props} /> } />
      </Switch> */}
      <Footer />
    </>
  );
};

export { Routes };
