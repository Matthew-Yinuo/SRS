import React from "react";
import { Link } from "react-router-dom";
import * as api from "./Actions";
export default class Categories extends React.PureComponent {
  state = { categories: {} };
  componentWillMount() {
    this.fetchCategories();
  }
  fetchCategories() {
    api.fetchCategories().then(response => {
      this.setState({ categories: response });
    });
  }
  render() {
    const { categories } = this.state;
    return (
      <div>
        <div>
          <h1>Categories</h1>
        </div>
        <div>
          {Object.keys(categories).map((id, key) => (
            <div key={key}>
              <Link to={id}>{categories[id]}</Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
