import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Author from '~screens/Author';
import Basket from '~screens/Basket';
import CourseDetail from '~screens/CourseDetail';
import MyCourses from '~screens/MyCourses';
import VideoPlayer from '~screens/VideoPlayer';
import PAGES from '~constants/pages';

const MyCourseStack = createNativeStackNavigator();

function MyCourseStackNavigator() {
  return (
    <MyCourseStack.Navigator>
      <MyCourseStack.Screen
        name={PAGES.myCourses}
        component={MyCourses}
        options={() => ({
          headerShown: false,
        })}
      />
      <MyCourseStack.Screen
        name={PAGES.courseDetail}
        component={CourseDetail}
        options={() => ({
          headerShown: false,
        })}
      />
      <MyCourseStack.Screen
        name={PAGES.videoPlayer}
        component={VideoPlayer}
        options={() => ({
          headerShown: false,
        })}
      />
      <MyCourseStack.Screen
        name={PAGES.author}
        component={Author}
        options={() => ({
          headerShown: false,
        })}
      />
      <MyCourseStack.Screen
        name={PAGES.basket}
        component={Basket}
        options={() => ({
          headerShown: false,
        })}
      />
    </MyCourseStack.Navigator>
  );
}

export default MyCourseStackNavigator;
