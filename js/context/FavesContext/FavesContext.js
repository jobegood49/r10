import React, { Component, createContext } from "react";
import { createFave, deleteFave, getFaves } from "../../config/models";

const FavesContext = createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favesIds: []
    };
  }

  componentDidMount() {
    console.log("yo");
    this.addFaveSession("5");
    console.log(this.getFavedSessionsIds());
  }

  getFavedSessionsIds = () => {
    try {
      this.setState({ favesIds: getFaves() });
    } catch (error) {
      console.log(error);
    }
  };

  addFaveSession = sessionId => {
    try {
      createFave(sessionId);
      this.getFavedSessionsIds();
    } catch (error) {
      console.log(error);
    }
  };

  removeFaveSession = sessionId => {
    try {
      removeFave(sessionId);
      this.getFavedSessionsIds();
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          getFaves: this.getFavedSessionsIds,
          addFave: this.addFaveSession,
          removeFave: this.removeFaveSession
        }}
      >
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export { FavesProvider };
export default FavesContext;
