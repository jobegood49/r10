import React from "react";
import { Text, View, FlatList, ScrollView, Image } from "react-native";
import styles from "./styles";
import ConductItem from "../../components/ConductItem";

const About = props => {
  const data = props.data.allConducts;
  return (
    <ScrollView style={styles.aboutContainer}>
      <View style={styles.logoWrap}>
        <Image
          source={require("../../assets/images/r10_3.png")}
          style={styles.img}
        />
      </View>
      <Text style={styles.description}>
        R10 is a conference that focuses on just about any topic related to dev
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
            <ConductItem conduct={el} />
          </View>
        );
      })}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          &#9400; RED Academy {new Date().getFullYear()}
        </Text>
      </View>
    </ScrollView>
  );
};

export default About;
