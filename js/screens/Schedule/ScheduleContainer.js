import React, { Component } from "react";
import Schedule from "./Schedule";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { View, Text } from "react-native";
import { formatSessionData } from "./dataFormatHelpers";
import FavesContext from "./../../context/FavesContext/";

class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule"
  };
  render() {
    return (
      <Query
        query={gql`
          {
            allSessions {
              location
              id
              startTime
              title
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;
          return (
            <FavesContext.Consumer>
              {values => {
                console.log("these are the faves ids",values.favesIds)
                return (
                  <Schedule
                    data={formatSessionData(data.allSessions)}
                    navigation={this.props.navigation}
                    favesIds={values.favesIds}
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

export default ScheduleContainer;
