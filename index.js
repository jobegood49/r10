/** @format */

import { AppRegistry } from "react-native";
import App from "./js/App";
import { name as appName } from "./app.json";

import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjh2hph6n6njl0108f6n59j3j"
});

// client
//   .query({
//     query: gql`
//       {
//         allConducts {
//           description
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));




AppRegistry.registerComponent(appName, () => App);
