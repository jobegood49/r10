import React, { Component } from "react";
import Faves from "./Faves";
import FavesContext from "../../context/FavesContext";

class FavesContainer extends Component {
  static navigationOptions = {
    title: "Faves"
  };

  render() {
    return (
      <FavesContext.Consumer>
        {values => {
          console.log(values);
          return <Faves />;
        }}
      </FavesContext.Consumer>
    );
  }
}

export default FavesContainer;
