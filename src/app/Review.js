import React from "react";
import * as api from "./Actions";

export default class Review extends React.PureComponent {
  state = { deck: {}, cards: [] };

  componentWillMount() {
    const { params } = this.props.match;
    this.fetchDeck(params.deckId);
  }

  fetchDeck = deckId => {
    api.fetchDeck(deckId).then(response => {
      this.setState({ deck: response }, () => this.fetchCards(response));
    });
  };

  fetchCards = deck => {
    api.fetchCards(deck).then(response => {
      this.setState({ cards: response });
    });
  };

  render() {
    const { deck, cards } = this.state;

    return (
      <div>
        <div>
          <h1>Review for {deck.name}</h1>
        </div>
        <div>
          {cards.map((card, key) => (
            <div key={key}>
              <div dangerouslySetInnerHTML={{ __html: card.front }} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
