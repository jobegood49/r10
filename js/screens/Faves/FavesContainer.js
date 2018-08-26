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
  sessionNav = id => {
    this.props.navigation.navigate("Session", { id: id });
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
                console.log("on fave page", values.favesIds);
                return <Faves data={allSessions} favesIds={values.favesIds} nav={id => this.sessionNav(id)} />;
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
      // <FavesContext.Consumer>

      // </FavesContext.Consumer>
    );
  }
}

export default FavesContainer;
