import * as React from "react";
import { Link } from "react-router-dom";
// import * as api from "../cardActions";
import "./CardHome.css";

const EmptyView = () => (
  <div className="card-home mt-5 pt-3">
    <div className="col-md-8 offset-md-2 text-center">
      <span
        style={{ fontSize: "80px", fontWeight: "bold" }}
        role="img"
        aria-label="jsx-a11y"
      >
        😅
      </span>
      <h3 style={{ marginBottom: "40px" }}>
        Oops, this does not seem to exist.
      </h3>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  </div>
);

export default EmptyView;
