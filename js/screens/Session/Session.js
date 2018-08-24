import React from "react";
import { Text, View } from "react-native";

const Session = ({data}) => (
   
  <View>
      { console.log(data)}
    <Text>This is the session component</Text>
  </View>
);

export default Session;
