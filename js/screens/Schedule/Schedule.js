import React from "react";
import { Text, View } from "react-native";
import CustomList from "../../components/CustomList";

const Schedule = ({data,navigation}) => {
  return (
    <View>
      <Text>Schedule page</Text>
      <CustomList data={data} navigation={navigation}/>
    </View>
  );
};

export default Schedule;
