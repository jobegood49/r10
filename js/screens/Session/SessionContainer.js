import React, { Component } from "react";
import { Text } from "react-native";
import Session from "./Session";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const SESSION_QUERY = gql`
  query Session($id: ID!) {
    Session(id: $id) {
      id
      title
      location
      startTime
      speaker {
        name
        bio
      }
    }
  }
`;

class SessionContainer extends Component {
  render() {
    console.log(this.props.navigation.getParam("id"));
    return (
      <Query
        // query={gql`
        //   {
        //     Session(id: "cjh2jemtn167f0122t01busx0") {
        //       location
        //       description
        //       startTime
        //       title
        //     }
        //   }
        // `}
        query={SESSION_QUERY}
        variables={{id: this.props.navigation.getParam("id") }}
      >
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;
          return <Session data={data.Session} />;
        }}
      </Query>
    );
  }
}

export default SessionContainer;
