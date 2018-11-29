import React from "react";
import { Link } from "react-router-dom";
import * as api from "./Actions";

export default class Categories extends React.Component {
  state = { categories: [] };
  componentWillMount() {
    this.fetchCategories();
  }

  fetchCategories() {
    api.fetchCategories().then(response => {
      this.setState({ categories: response });
      console.log(response);
    });
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        <div>
          <h1>Study Cards Gamified</h1>
          <p>Decks of cards for optimized studying</p>
        </div>
        <div>
          {categories.map(category => (
            <div
              key={category.id}
              style={{
                width: "180px",
                height: "180px"
              }}
            >
              <Link
                to={category.id}
                style={{
                  fontSize: "14px",
                  opacity: category.decks ? 1 : 0.65
                }}
              >
                {category.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
