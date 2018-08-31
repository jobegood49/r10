import React, { Component } from "react";
import { Text } from "react-native";
import Session from "./Session";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import FavesContext from "../../context/FavesContext";

const SESSION_QUERY = gql`
  query Session($id: ID!) {
    Session(id: $id) {
      id
      title
      location
      startTime
      description
      speaker {
        id
        image
        name
      }
    }
  }
`;

class SessionContainer extends Component {
  render() {
    // console.log(this.props.navigation.getParam("id"));
    return (
      <Query
        query={SESSION_QUERY}
        variables={{ id: this.props.navigation.getParam("id") }}
      >
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;
          return (
            <FavesContext.Consumer>
              {values => {
                // console.log("values in ctx", values.favesIds.map(el => {console.log(el)}));
                return (
                  <Session
                    data={data.Session}
                    addFave={values.addFave}
                    removeFave={values.removeFave}
                    nav={this.props.navigation}
                    favesIds={values.favesIds}
                    sessionId={this.props.navigation.getParam("id")}
                  />
                );
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

export default SessionContainer;
