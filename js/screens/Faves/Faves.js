import React from "react";
import { Text, View } from "react-native";

const Faves = ({ data, favesIds, nav }) => {
  const favesData = [];
  data.map(item => {
    if (favesIds.includes(item.id)) favesData.push(item);
  });

  console.log("basic fave page", favesData);
  return (
    <View>
      <Text>Faves page</Text>
    </View>
  );
};

export default Faves;
