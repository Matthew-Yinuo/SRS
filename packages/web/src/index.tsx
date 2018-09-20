import * as React from "react";
import { ApolloProvider } from "react-apollo";
import * as ReactDOM from "react-dom";
import { client } from "./apollo";
import registerServiceWorker from "./registerServiceWorker";
import { Routes } from "./routes";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
