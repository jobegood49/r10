import React from "react";
import {
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";
import AboutScreen from "../screens/About";
import MapScreen from "../screens/Map";
import FavesScreen from "../screens/Faves";
import ScheduleScreen from "../screens/Schedule";
import Icon from "react-native-vector-icons/Ionicons";
import { sharedNavigationOptions } from "./config";
import SessionScreen from "../screens/Session"

const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const MapStack = createStackNavigator(
  {
    Map: MapScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const FavesStack = createStackNavigator(
  {
    Faves: FavesScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Session: SessionScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const renderIcon = (name,color) =>{
    return <Icon name = {name} color={color} size={25}/>
}
ScheduleStack.navigationOptions={
    drawerIcon:({color}) => renderIcon('md-calendar',color)
}
// Dedicated stacks for Schedule and Faves will go here too!
export default createDrawerNavigator(
  {
    About: AboutStack,
    Map: MapStack,
    Faves: FavesStack,
    Schedule: ScheduleStack
  }
);
