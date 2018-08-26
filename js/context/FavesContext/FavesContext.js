import React, { Component, createContext } from "react";
import {
  createFave,
  deleteFave,
  getFaves,
  queryFaves
} from "../../config/models";

const FavesContext = createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favesIds: []
    };
  }

  componentDidMount() {
    // console.log("yo");
    this.getFavedSessionsIds();

  }

  getFavedSessionsIds = () => {
    try {
      // const favesIds = [];
      // getFaves().map(fave => {
      //   faveIds.push(fave.id);
      // });
      // this.setState({ favesIds: favesIds });
      // console.log("get faves", queryFaves())
      // this.setState({ favesIds: getFaves() });
      this.setState({ favesIds: queryFaves() });

      console.log("new state", this.state.favesIds);
    } catch (error) {
      console.log(error);
    }
  };

  addFaveSession = sessionId => {
    console.log(
      "a fave was tempted to be added with the session id ",
      sessionId
    );
    try {
      createFave(sessionId);
      this.getFavedSessionsIds();
    } catch (error) {
      console.log(error);
    }
  };

  removeFaveSession = sessionId => {
    console.log(
      "a fave was tempted to be deleted with the session id ",
      sessionId
    );
    try {
      deleteFave(sessionId);
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
