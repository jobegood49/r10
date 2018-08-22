import React from "react";
import { Text, View, FlatList, ScrollView, Image } from "react-native";
import styles from "./styles";
import ConductItem from "../../components/ConductItem"

const About = props => {
  const data = props.data.allConducts;
  return (
    <View style={styles.container}>
      <Image
          source={require('../../assets/images/r10_3.png')}
          style={styles.img}
        />
      <ScrollView>
        <Text style={styles.description}>
          R10 is a conference that focuses on just about any topic related to
          dev
        </Text>
        <Text style={styles.header}>Date an venue</Text>
        <Text style={styles.description}>
          The R10 conderence will take place on Tuesday, june 27, 2017 in
          Vancouver, BC.
        </Text>
        <Text style={styles.header}>Code of Conduct</Text>
        {data.map((el, index) => {
          return (
            <View key={index}>
              <ConductItem conduct= {el}/>
            </View>
          );
        })}
      </ScrollView>

      {/* <FlatList
          data={props.data.allConducts}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        /> */}
    </View>
  );
};

export default About;
