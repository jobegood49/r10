import React from "react";
import { Text, View } from "react-native";
import CustomList from "../../components/CustomList"
import { formatSessionData } from "../../screens/Schedule/dataFormatHelpers";

const Faves = ({ data, favesIds, nav }) => {
  const favesData = [];

  data.map(item => {
    if (favesIds.includes(item.id)) favesData.push(item);
  });
  console.log("basic fave page", favesData);
  return (
    <View>
      <CustomList data= {formatSessionData(favesData)} navigation={nav}/>
      <Text>Faves page</Text>
    </View>
  );
};

export default Faves;
