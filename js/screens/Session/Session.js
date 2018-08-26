import React from "react";
import { Text, View, Button } from "react-native";
// import FavesContext from "../../context/FavesContext";

const Session = ({ data, addFave, removeFave }) => (
  //   <FavesContext.Consumer>
  <View>
    {/* {console.log(data)}
    {console.log(addFave)}
    {console.log(removeFave)} */}
    <Text>{data.title}</Text>
    <Text>{data.location}</Text>
    <Text>{data.speaker.name}</Text>
    <Button title="Add to Faves" onPress={() => addFave(data.id)} />
    <Button title="Remove from Faves" onPress={() => removeFave(data.id)} />
  </View>
  //   </FavesContext.Consumer>
);

export default Session;
