import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ComingSoon, Landing, NotFound, CardHome } from "../pages";
import { RegisterConnector } from "../modules/register/RegisterConnector";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/register" component={RegisterConnector} />
      <Route exact={true} path="/" component={Landing} />
      <Route path="/about" component={ComingSoon} />
      <Route path="/api" component={ComingSoon} />
      <Route path="/help" component={ComingSoon} />
      <Route path="/cards" component={CardHome} />
      <Route exact={false} path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);
