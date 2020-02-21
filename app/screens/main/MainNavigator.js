/* eslint-disable react/display-name */
import { createBottomTabNavigator } from "react-navigation";

//screens
import Home from "../home";
import Favorites from "../favorites";
import Inbox from "../inbox";
import Profile from "../profile";

import TabBarIcon from "./TabBarIcon";

const ScreenConfigurations = {
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "HOME",
      tabBarIcon: TabBarIcon("home"),
    },
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      tabBarLabel: "FAVORITES",
      tabBarIcon: TabBarIcon("heart-o"),
    },
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: "INBOX",
      tabBarIcon: TabBarIcon("comments-o"),
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "PROFILE",
      tabBarIcon: TabBarIcon("user-circle-o"),
    },
  },
};

const tabBarOptions = {
  activeTintColor: "red",
  inactiveTintColor: "grey",
  style: {
    backgroundColor: "white",
    borderTopWidth: 0,
    shadowOffset: { width: 5, height: 3 },
    shadowColor: "black",
    shadowOpacity: 0.5,
    elevation: 5,
    paddingVertical: 5,
  },
};

export default createBottomTabNavigator(ScreenConfigurations, {
  tabBarOptions,
});
