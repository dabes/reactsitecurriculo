// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/main.css";
import "./assets/css/timeline.css";
import reportWebVitals from "./reportWebVitals";
// import client from "./api/apolloClient";
import App from "./pages/App";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const clientLocal = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:4000/graphql",
    fetch: async (uri, options) => {
      return fetch(uri, options);
    },
  }),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={clientLocal}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
