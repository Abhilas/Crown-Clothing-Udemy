import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import History from "./apphistory.component";

import HomePage from "../../pages/homepage/homepage.component";
import ShopPage from "../../pages/shop/shop.component";

const AppRoute = () => {
  return (
    <Router history={History}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </Router>
  );
};

export default AppRoute;
