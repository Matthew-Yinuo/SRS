import React from "react";
import { Link } from "react-router-dom";
import * as api from "./Actions";

import Logo from "./Logos";

export default class Decks extends React.PureComponent {
  state = { category: {}, decks: [] };

  componentWillMount() {
    const { params } = this.props.match;
    this.fetchCategory(params.categoryId);
  }

  fetchCategory = categoryId => {
    api.fetchCategory(categoryId).then(response => {
      this.setState({ category: response }, () => this.fetchDecks(response));
    });
  };

  fetchDecks = category => {
    api.fetchDecks(category).then(response => {
      this.setState({ decks: response });
    });
  };

  render() {
    const { category, decks } = this.state;

    return (
      <div>
        <div>
          <Link to="/">
            <Logo name="chevron-left" />
            Categories
          </Link>
          <h1>{category.name}</h1>
          {category.description && <p>{category.description}</p>}
        </div>
        <div>
          {decks.map((deck, key) => (
            <div style={{ height: "240px" }} key={key}>
              <Link
                to={`/decks/${deck.id}`}
                style={{
                  fontSize: "14px",
                  opacity: deck.cards ? 1 : 0.25
                }}
              >
                {deck.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
