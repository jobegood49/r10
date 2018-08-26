import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text } from "react-native";
import Speaker from "./Speaker";

const SPEAKER_QUERY = gql`
  query Speaker($id: ID!) {
    Speaker(id: $id) {
      bio
      image
      name
      url
    }
  }
`;

class SpeakerContainer extends Component {
  render() {
    return (
      <Query
        query={SPEAKER_QUERY}
        variables={{ id: this.props.navigation.getParam("id") }}
      >
        {({ loading, error, data }) => {
          console.log(data)
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;
          return <Speaker data={data}/>;
        }}
      </Query>
    );
  }
}

export default SpeakerContainer;
