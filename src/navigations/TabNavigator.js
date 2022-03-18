import React from 'react';
import { StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarIcon from '~components/navigations/TabBarIcon';
import TabBarLabel from '~components/navigations/TabBarLabel';
import { selectTabBar } from '~features/TabBarSlice';

import AccountStackNavigator from './AccountStackNavigator';
import ExploreStackNavigator from './ExploreStackNavigator';
import HomeStackNavigator from './HomeStackNavigator';
import MyCoursesStackNavigator from './MyCoursesStackNavigator';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  const tabBar = useSelector(selectTabBar);

  const renderTabBarLabel = (focused, text) => <TabBarLabel focused={focused} text={text} />;

  const renderTabBarIcon = (focused, name) => <TabBarIcon focused={focused} name={name} />;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: [styles.tabBarStyle, { display: tabBar.visible ? null : 'none' }],
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={() => ({
          headerShown: false,
          tabBarLabel: ({ focused }) => renderTabBarLabel(focused, 'Home'),
          tabBarIcon: ({ focused }) => renderTabBarIcon(focused, 'home'),
        })}
      />
      <Tab.Screen
        name="ExploreStack"
        component={ExploreStackNavigator}
        options={() => ({
          headerShown: false,
          tabBarLabel: ({ focused }) => renderTabBarLabel(focused, 'Explore'),
          tabBarIcon: ({ focused }) => renderTabBarIcon(focused, 'search'),
        })}
      />
      <Tab.Screen
        name="MyCoursesStack"
        component={MyCoursesStackNavigator}
        options={() => ({
          headerShown: false,
          tabBarLabel: ({ focused }) => renderTabBarLabel(focused, 'Courses'),
          tabBarIcon: ({ focused }) => renderTabBarIcon(focused, 'play-circle'),
        })}
      />
      <Tab.Screen
        name="AccountStack"
        component={AccountStackNavigator}
        options={() => ({
          headerShown: false,
          tabBarLabel: ({ focused }) => renderTabBarLabel(focused, 'Account'),
          tabBarIcon: ({ focused }) => renderTabBarIcon(focused, 'person-circle'),
        })}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#FFFFFF',
    elevation: 0,
    height: 70,
    borderWidth: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});
