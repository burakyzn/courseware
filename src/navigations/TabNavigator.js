import * as React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountStackNavigator from "./AccountStackNavigator";
import ExploreStackNavigator from "./ExploreStackNavigator";
import HomeStackNavigator from "./HomeStackNavigator";
import MyCoursesStackNavigator from "./MyCoursesStackNavigator";
import { useSelector } from "react-redux";
import { selectTabBar } from "features/tabBarSlice";
import TabBarLabel from "components/navigations/TabBarLabel";
import TabBarIcon from "components/navigations/TabBarIcon";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const tabBar = useSelector(selectTabBar);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: [
          styles.tabBarStyle,
          { display: tabBar.visible ? null : "none" },
        ],
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={() => ({
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} text="Home"></TabBarLabel>
          ),
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} name="home"></TabBarIcon>;
          },
        })}
      />
      <Tab.Screen
        name="ExploreStack"
        component={ExploreStackNavigator}
        options={() => ({
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} text="Explore"></TabBarLabel>
          ),
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} name="search"></TabBarIcon>;
          },
        })}
      />
      <Tab.Screen
        name="MyCoursesStack"
        component={MyCoursesStackNavigator}
        options={() => ({
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} text="Courses"></TabBarLabel>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <TabBarIcon focused={focused} name="play-circle"></TabBarIcon>
            );
          },
        })}
      />
      <Tab.Screen
        name="AccountStack"
        component={AccountStackNavigator}
        options={() => ({
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <TabBarLabel focused={focused} text="Account"></TabBarLabel>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <TabBarIcon focused={focused} name="person-circle"></TabBarIcon>
            );
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "#FFFFFF",
    elevation: 0,
    height: 70,
    borderWidth: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});
