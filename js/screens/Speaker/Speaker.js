import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import { styles } from "./styles";
import { Linking } from "react-native";

const Speaker = ({ data }) => {
  

  handleLink = () => {
    console.log("handleLink",data.Speaker.url)
    Linking.canOpenURL(data.Speaker.url)
      .then(supported => {
        if (!supported) {
          console.log("Can't handle url: " + data.Speaker.url);
        } else {
          return Linking.openURL(data.Speaker.url);
        }
      })
      .catch(err => console.error("An error occurred", err));
  };
  return (
    <ScrollView>
      {console.log(data)}
      <Text>This is the speaker</Text>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: data.Speaker.image }} />
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>{data.Speaker.name}</Text>
          <Text style={styles.content}>{data.Speaker.bio}</Text>
        </View>
        <TouchableOpacity onPress={() => handleLink()}>
          <Text>Read more on wikipedia</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Speaker;
