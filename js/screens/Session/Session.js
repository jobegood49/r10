import React from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  Platform,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./styles";

const Session = ({ data, addFave, removeFave, nav, favesIds, sessionId }) => {
  const isFaved = favesIds.includes(sessionId);
  console.log("this is faved", isFaved);

  return (
    <ScrollView>
      <View style={styles.locationContainer}>
        <Text style={styles.subheading}>{data.location}</Text>
        {isFaved ? (
          <Icon
            name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
            color="red"
            backgroundColor="transparent"
            size={20}
          />
        ) : null}
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>{data.title}</Text>
        <Text style={styles.time}>{data.startTime}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.subheading}>Presented By:</Text>
      </View>
      <View>
        {/* {console.log("data in session", data)}
        {console.log("speaker data image", data.speaker.image)}
        {console.log("speaker favesId", favesIds)}
        {console.log("this is the sessionId", sessionId)} */}

        <TouchableOpacity
          onPress={() => {
            // console.log("navigate to speaker");
            nav.navigate("Speaker", { id: data.speaker.id });
          }}
        >
          <Image style={styles.image} source={{ uri: data.speaker.image }} />
          <Text>{data.speaker.name}</Text>
        </TouchableOpacity>
        <Button title="Add to Faves" onPress={() => addFave(data.id)} />
        <Button title="Remove from Faves" onPress={() => removeFave(data.id)} />
      </View>
    </ScrollView>
  );
};

export default Session;
