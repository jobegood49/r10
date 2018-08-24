import React from "react";
import { Text, View } from "react-native";
import CustomList from "../../components/CustomList";

const Schedule = ({data}) => {
  return (
    <View>
      <Text>Schedule page</Text>
      <CustomList data={data}/>
    </View>
  );
};

export default Schedule;
