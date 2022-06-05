import React from 'react';
import { StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarIcon from '~components/navigations/TabBarIcon';
import TabBarLabel from '~components/navigations/TabBarLabel';
import { selectTabBar } from '~features/TabBarSlice';
import { PAGES_STACK, PAGES_TITLE } from '~constants/pages';

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
        name={PAGES_STACK.homeStack}
        component={HomeStackNavigator}
        options={() => ({
          headerShown: false,
          tabBarLabel: ({ focused }) => renderTabBarLabel(focused, PAGES_TITLE.home),
          tabBarIcon: ({ focused }) => renderTabBarIcon(focused, 'home'),
        })}
      />
      <Tab.Screen
        name={PAGES_STACK.exploreStack}
        component={ExploreStackNavigator}
        options={() => ({
          headerShown: false,
          tabBarLabel: ({ focused }) => renderTabBarLabel(focused, PAGES_TITLE.explore),
          tabBarIcon: ({ focused }) => renderTabBarIcon(focused, 'search'),
        })}
      />
      <Tab.Screen
        name={PAGES_STACK.myCoursesStack}
        component={MyCoursesStackNavigator}
        options={() => ({
          headerShown: false,
          tabBarLabel: ({ focused }) => renderTabBarLabel(focused, PAGES_TITLE.myCourses),
          tabBarIcon: ({ focused }) => renderTabBarIcon(focused, 'play-circle'),
        })}
      />
      <Tab.Screen
        name={PAGES_STACK.accountStack}
        component={AccountStackNavigator}
        options={() => ({
          headerShown: false,
          tabBarLabel: ({ focused }) => renderTabBarLabel(focused, PAGES_TITLE.account),
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
