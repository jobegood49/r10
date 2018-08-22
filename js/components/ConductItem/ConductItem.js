import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const ConductItem = props => (
  <View>
    <Text>{props.conduct.title}</Text>
    <Text>{props.conduct.description}</Text>
  </View>
);

export default ConductItem;
