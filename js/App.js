/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AboutScreen from "./screens/About"
import RootStackNavigator from "./navigation/RootStackNavigation"


export default class App extends Component {
  render() {
    return (
      <RootStackNavigator />
      // <View style={styles.container}>
      //   <AboutScreen />
      //   {/* <Text style={styles.welcome}>Welcome to React Native!</Text> */}
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
