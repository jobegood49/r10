import React from "react";
import { Text, View } from "react-native";
import CustomList from "../../components/CustomList";

const Schedule = ({data,navigation, favesIds}) => {
  console.log('in sched ', favesIds )
  return (
    <View>
      <CustomList data={data} navigation={navigation} favesIds={favesIds}/>
    </View>
  );
};

export default Schedule;
