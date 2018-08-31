import React from "react";
import {
  Text,
  View,
  SectionList,
  StyleSheet,
  Button,
  TouchableOpacity,
  Platform
} from "react-native";
import { colors, typography } from "../../config/styles";
// import Moment from 'moment';
import { styles } from "./styles";

// import styles from "./styles";
// import { readQueryFromStore } from "apollo-boost";

//rncsl
export default (CustomList = ({ data, navigation, favesIds }) => {
  console.log("customlist", data);
  console.log("custom list faves", favesIds )
  return (
    <View>
      <SectionList
        sections={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Session", { id: item.id })}
          >
            <View>
              <Text style={styles.item}>{item.title}</Text>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
});
