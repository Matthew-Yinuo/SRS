import React from "react";
import { Link } from "react-router-dom";
import * as api from "./Actions";

export default class Decks extends React.PureComponent {
  state = { category: {}, decks: {} };
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
          <h1>{category.name} Decks</h1>
        </div>
        <div>
          {Object.keys(decks).map((id, key) => (
            <div key={key}>
              <Link to={`/decks/${id}`} className="">
                {decks[id]}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
