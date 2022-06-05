import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Author from '~screens/Author';
import Basket from '~screens/Basket';
import CourseDetail from '~screens/CourseDetail';
import Explore from '~screens/Explore';
import VideoPlayer from '~screens/VideoPlayer';
import PAGES from '~constants/pages';

const ExploreStack = createNativeStackNavigator();

function ExploreStackNavigator() {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen
        name={PAGES.explore}
        component={Explore}
        options={() => ({
          headerShown: false,
        })}
      />
      <ExploreStack.Screen
        name={PAGES.courseDetail}
        component={CourseDetail}
        options={() => ({
          headerShown: false,
        })}
      />
      <ExploreStack.Screen
        name={PAGES.videoPlayer}
        component={VideoPlayer}
        options={() => ({
          headerShown: false,
        })}
      />
      <ExploreStack.Screen
        name={PAGES.author}
        component={Author}
        options={() => ({
          headerShown: false,
        })}
      />
      <ExploreStack.Screen
        name={PAGES.basket}
        component={Basket}
        options={() => ({
          headerShown: false,
        })}
      />
    </ExploreStack.Navigator>
  );
}

export default ExploreStackNavigator;
