import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Author from '~screens/Author';
import Basket from '~screens/Basket';
import CourseDetail from '~screens/CourseDetail';
import MyCourses from '~screens/MyCourses';
import VideoPlayer from '~screens/VideoPlayer';

const MyCourseStack = createNativeStackNavigator();

function MyCourseStackNavigator() {
  return (
    <MyCourseStack.Navigator>
      <MyCourseStack.Screen
        name="MyCourses"
        component={MyCourses}
        options={() => ({
          headerShown: false,
        })}
      />
      <MyCourseStack.Screen
        name="CourseDetail"
        component={CourseDetail}
        options={() => ({
          headerShown: false,
        })}
      />
      <MyCourseStack.Screen
        name="VideoPlayer"
        component={VideoPlayer}
        options={() => ({
          headerShown: false,
        })}
      />
      <MyCourseStack.Screen
        name="Author"
        component={Author}
        options={() => ({
          headerShown: false,
        })}
      />
      <MyCourseStack.Screen
        name="Basket"
        component={Basket}
        options={() => ({
          headerShown: false,
        })}
      />
    </MyCourseStack.Navigator>
  );
}

export default MyCourseStackNavigator;
