import React from "react";
import * as api from "./Actions";

export default class Review extends React.PureComponent {
  state = { cards: [] };
  componentWillMount() {
    this.fetchCards();
  }
  fetchCards() {
    api.fetchCards().then(response => {
      this.setState({ cards: response });
    });
  }
  render() {
    const { cards } = this.state;
    console.log("cards", cards);
    return (
      <div>
        <div>
          <h1>Review</h1>
        </div>
        <div>
          <div>1 of 2</div>
          <div>2 of 2</div>
        </div>
      </div>
    );
  }
}
