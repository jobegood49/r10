import React, { Component } from "react";
import Schedule from "./Schedule";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import {Text} from "react-native";
import {formatSessionData} from "./dataFormatHelpers"

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
          return <Schedule data={formatSessionData(data.allSessions)} />;
        }}
      </Query>
    );
  }
}

export default ScheduleContainer;
