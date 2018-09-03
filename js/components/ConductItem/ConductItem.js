import React, { Component } from "react";
import { Text, View, TouchableOpacity, Animated, Easing } from "react-native";
import styles from "./styles";

class ConductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      opacity: new Animated.Value(0)

    };
  }

  onPress = () => {
    const fadeToggle = !this.state.show;
    this.animateText(fadeToggle);
    this.setState({
      show: !this.state.show
    });
  };

  animateText(fadeToggle) {
    this.state.opacity.setValue(fadeToggle ? 0 : 1);
    Animated.timing(this.state.opacity, {
      toValue: fadeToggle ? 1 : 0,
      easing: Easing.elastic(0.2),
      duration: this.duration
    }).start();
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={styles.conductTitle}>{`${this.state.show ? "-" : "+"} ${
            this.props.conduct.title
          }`}</Text>
        </TouchableOpacity>
        {this.state.show && (
          <Animated.Text style={{ opacity: this.state.opacity, paddingBottom: 10 }}>
            {this.props.conduct.description}
          </Animated.Text>
        )}
      </View>
    );
  }
}

export default ConductItem;
