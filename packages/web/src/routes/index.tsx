import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { ComingSoon, Landing, NotFound } from "../pages";
import "./index.css";

export const Routes = () => (
  <BrowserRouter>
    <div className="App">
      <NavBar className="App-navbar" />
      <div className="App-content py-5">
        <Switch>
          <Route exact={true} path="/" component={Landing} />
          <Route path="/about" component={ComingSoon} />
          <Route path="/api" component={ComingSoon} />
          <Route path="/help" component={ComingSoon} />
          <Route exact={false} path="*" component={NotFound} />
        </Switch>
      </div>
      <Footer className="App-footer" />
    </div>
  </BrowserRouter>
);
