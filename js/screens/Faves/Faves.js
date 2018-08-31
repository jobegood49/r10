import React from "react";
import { Text, View } from "react-native";
import CustomList from "../../components/CustomList";
import { formatSessionData } from "../../screens/Schedule/dataFormatHelpers";

const Faves = ({ data, favesIds, nav }) => {
  const favesData = [];

  data.map(item => {
    if (favesIds.includes(item.id)) favesData.push(item);
  });
  return (
    <View>
      <CustomList data={formatSessionData(favesData)} navigation={nav} favesIds={favesIds} />
      <Text>Faves page</Text>
    </View>
  );
};

export default Faves;
