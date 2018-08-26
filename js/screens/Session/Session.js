import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
// import FavesContext from "../../context/FavesContext";

const Session = ({ data, addFave, removeFave, nav }) => (
  //   <FavesContext.Consumer>
  <View>
    {/* {console.log(data)}
    {console.log(addFave)}
    {console.log(removeFave)} */}
    <Text>{data.title}</Text>
    <Text>{data.location}</Text>

    <TouchableOpacity
      onPress={() => {
        console.log("navigate to speaker");
        nav.navigate("Speaker");
      }}
    >
      <Text>{data.speaker.name}</Text>
    </TouchableOpacity>
    <Button title="Add to Faves" onPress={() => addFave(data.id)} />
    <Button title="Remove from Faves" onPress={() => removeFave(data.id)} />
  </View>
  //   </FavesContext.Consumer>
);

export default Session;
