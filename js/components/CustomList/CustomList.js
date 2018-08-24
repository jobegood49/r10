import React from "react";
import { Text, View, SectionList, StyleSheet, Button } from "react-native";
// import styles from "./styles";
// import { readQueryFromStore } from "apollo-boost";

//rncsl
export default (CustomList = ({ data, navigation }) => {
  console.log("customlist", data);
  return (
    <View>
      <SectionList
        sections={data}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.item}>{item.title}</Text>
            <Button
              title="Go to Session Page"
              onPress={() => navigation.navigate("Session", { id: item.id })}
            />
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
