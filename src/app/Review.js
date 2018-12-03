import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import Chance from "chance";
import Logo from "./Logos";
import * as api from "./Actions";

const chance = new Chance();

export default class Review extends React.PureComponent {
  state = { deck: {}, cards: [], options: [], index: 0, isWrong: false };

  componentWillMount() {
    const { params } = this.props.match;
    this.fetchDeck(params.deckId);
  }

  onClick = (answer, card) => {
    if (answer.id === card.id) {
      const { cards } = this.state;
      const index = Math.min(this.state.index + 1, cards.length - 1);
      this.setState({ index, options: this.getOptions(index, cards) });
    } else {
      this.setState({ isWrong: true }, () =>
        setTimeout(() => this.setState({ isWrong: false }), 1000)
      );
    }
  };

  checkAnswer = (answer, card) => {};

  fetchDeck = deckId => {
    api.fetchDeck(deckId).then(response => {
      this.setState({ deck: response }, () => this.fetchCards(response));
    });
  };

  fetchCards = deck => {
    const { index } = this.state;
    api.fetchCards(deck).then(response => {
      const cards = chance.shuffle(response);
      this.setState({ cards, options: this.getOptions(index, cards) });
    });
  };

  onToggle = () => this.setState(({ toggle }) => ({ toggle: !toggle }));

  getOptions = (index, cards) => {
    const random = chance.unique(chance.natural, 3, {
      min: 0,
      max: cards.length - 1
    });
    const opts = chance.shuffle([...random, index]);
    return opts.map(el => cards[el]);
  };

  render() {
    const { deck, cards, options, index } = this.state;

    if (cards.length === 0) {
      return (
        <div>
          <h1>Loading cards...</h1>
        </div>
      );
    }

    const selected = cards[index];

    return (
      <div>
        <div>
          <Link to="/">
            <Logo name="chevron-left" />
            Back to Category
          </Link>
          <h1 className="m-0">{deck.name}</h1>
          {deck.description && <p>{deck.description}</p>}
        </div>
        <div>
          <div
            className={cx("", {
              shake: this.state.isWrong
            })}
          >
            <div>
              <div>
                <div dangerouslySetInnerHTML={{ __html: selected.front }} />
              </div>
              <div>
                {options.map((option, key) => (
                  <div
                    key={key}
                    onClick={() => this.onClick(option, selected)}
                    className={cx("")}
                    style={{ cursor: "pointer" }}
                  >
                    <div style={{ fontSize: ".9em" }}>{key + 1}</div>
                    {option.back}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
