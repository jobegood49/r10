import React, { Component } from "react";
import Faves from "./Faves";
import FavesContext from "../../context/FavesContext";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text, ActivityIndicator } from "react-native";

const ALL_SESSIONS_QUERY = gql`
  {
    allSessions {
      location
      id
      startTime
      title
    }
  }
`;

class FavesContainer extends Component {
  static navigationOptions = {
    title: "Faves"
  };

  render() {
    return (
      <Query query={ALL_SESSIONS_QUERY}>
        {({ data: { allSessions }, loading, error }) => {
          if (loading) return <ActivityIndicator />;
          if (error) return <Text>Error :</Text>;
          return (
            <FavesContext.Consumer>
              {values => {
                return (
                  <Faves
                    data={allSessions}
                    favesIds={values.favesIds}
                    nav={this.props.navigation}
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

export default FavesContainer;
