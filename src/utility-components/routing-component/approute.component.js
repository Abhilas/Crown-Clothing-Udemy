import React, { Fragment } from "react";
import { Router, Route, Switch } from "react-router-dom";
import History from "./apphistory.component";

import HomePage from "../../pages/homepage/homepage.component";
import ShopPage from "../../pages/shop/shop.component";
import Header from "../../components/header/header.component";

const AppRoute = () => {
  return (
    <Fragment>
      <Router history={History}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default AppRoute;
