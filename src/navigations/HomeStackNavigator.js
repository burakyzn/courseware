import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Author from '~screens/Author';
import Basket from '~screens/Basket';
import CourseDetail from '~screens/CourseDetail';
import Home from '~screens/Home';
import VideoPlayer from '~screens/VideoPlayer';
import PAGES from '~constants/pages';

const HomeStack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={PAGES.home}
        component={Home}
        options={() => ({
          headerShown: false,
        })}
      />
      <HomeStack.Screen
        name={PAGES.courseDetail}
        component={CourseDetail}
        options={() => ({
          headerShown: false,
        })}
      />
      <HomeStack.Screen
        name={PAGES.videoPlayer}
        component={VideoPlayer}
        options={() => ({
          headerShown: false,
        })}
      />
      <HomeStack.Screen
        name={PAGES.author}
        component={Author}
        options={() => ({
          headerShown: false,
        })}
      />
      <HomeStack.Screen
        name={PAGES.basket}
        component={Basket}
        options={() => ({
          headerShown: false,
        })}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackNavigator;
