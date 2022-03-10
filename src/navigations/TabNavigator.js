import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Home} />
      <Tab.Screen name="Courses" component={Home} />
      <Tab.Screen name="Acount" component={Home} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
