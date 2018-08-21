import React, { Component } from "react";
import Map from "./Map";

class MapContainer extends Component {
  static navigationOptions = {
    title: "Map"
  };
  render() {
    return <Map />;
  }
}

export default MapContainer;
