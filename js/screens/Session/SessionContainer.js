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
      speaker {
        name
        bio
      }
    }
  }
`;

class SessionContainer extends Component {
  render() {
    // console.log(this.props.navigation.getParam("id"));
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
        variables={{ id: this.props.navigation.getParam("id") }}
      >
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;
          return (
            <FavesContext.Consumer>
              {values => {
                // console.log("values in ctx", values.favesIds.map(el => {console.log(el)}));
                return <Session data={data.Session}  addFave={values.addFave} removeFave={values.removeFave} nav={this.props.navigation} />;
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

export default SessionContainer;
