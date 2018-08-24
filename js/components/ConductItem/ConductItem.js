import React, { Component } from "react";
import { Text, View , TouchableOpacity} from "react-native";
import styles from "./styles";

class ConductItem extends Component {
  constructor(props) {
    super(props);
    this.state= {
      show: false
    }
  }

  onPress = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <View>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
        <Text style={styles.conductTitle}>{`${this.state.show ? "-" : "+"} ${this.props.conduct.title}`}</Text>
       </TouchableOpacity>
       {
         this.state.show &&(        <Text style={styles.conductDescription}>
          {this.props.conduct.description}
        </Text>) 
       }

      </View>
    );
  }
}

export default ConductItem;
