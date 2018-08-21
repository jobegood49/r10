import React, { Component } from 'react';
import { View, Text } from 'react-native';
import About from "./About"

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = {
    title: "About"
  };

  render() {
    return (
     <About />
    );
  }
}
