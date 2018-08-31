import React from "react";
import PropTypes from 'prop-types';

import {
  Text,
  View,
  SectionList,
  StyleSheet,
  Button,
  TouchableOpacity,
  Platform
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { colors, typography } from "../../config/styles";
import { styles } from "./styles";

export default (CustomList = ({ data, navigation, favesIds }) => {
  console.log("customlist", data);
  console.log("custom list faves", favesIds);
  return (
    <View>
      <SectionList
        sections={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Session", { id: item.id })}
          >
            <Text style={styles.item}>{item.title}</Text>

            <View style={styles.itemContainer}>
              <Text style={styles.location}>{item.location}</Text>
              {favesIds.includes(item.id) ? (
                <Icon
                  name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
                  color="red"
                  backgroundColor="transparent"
                  size={14}
                />
              ) : (
                <Text />
              )}
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

CustomList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          location: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired
        })
      )
    })
  ).isRequired
};