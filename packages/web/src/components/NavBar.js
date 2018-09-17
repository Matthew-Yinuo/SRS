import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Image, Dropdown } from "semantic-ui-react";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    const { className } = this.props;

    const isLandingPage = this.props.location.pathname === "/";

    return (
      <nav>
        <div className="container">
          <Link className="navbar-brand" to="/decks">
            Pensieve
          </Link>
        </div>
      </nav>
    );
  }
}

export default withRouter(NavBar);
