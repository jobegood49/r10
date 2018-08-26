import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text } from "react-native";
import Speaker from "./Speaker";

class SpeakerContainer extends Component {
    render() {
        return (
            <Speaker />
        );
    }
}

export default SpeakerContainer;