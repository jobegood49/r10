import React, { Component } from "react";
import { View, Text } from "react-native";
import About from "./About";
import gql from "graphql-tag";
import { Query } from "react-apollo";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    title: "About"
  };

  render() {
    return (
      <Query
        query={gql`
          {
            allConducts {
              id
              title
              description
            }
          }
        `}
      >
        {({ loading, error, data }) => {

          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;

          return <About data={data} />;
        }}
      </Query>
    );
  }
}
