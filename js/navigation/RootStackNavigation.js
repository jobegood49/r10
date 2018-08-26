import { createStackNavigator } from "react-navigation";
import About from "../screens/About";
import Map from "../screens/Map";
import tabNav from "./NavigationLayout";
import Speaker from "../screens/Speaker";

// import { createBottomTabNavigator } from "react-navigation";

export default createStackNavigator(
  {
    tabNav,
    Speaker: {
      screen: Speaker
    }
  },
  { headerMode: "none" }
);
