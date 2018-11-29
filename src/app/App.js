import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Categories from "./Cats";
import Decks from "./Decks";
import Review from "./Review";

export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Categories} />
            <Route exact path="/:categoryId" component={Decks} />
            <Route exact path="/decks/:deckId" component={Review} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
