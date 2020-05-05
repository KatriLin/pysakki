import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import "./index.css";
import App from "./App";
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql",
});

client
  .query({
    query: gql`
      {
        stop(id: "HSL:4610204") {
          name
          stoptimesWithoutPatterns {
            scheduledArrival
            realtimeArrival
            headsign
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
