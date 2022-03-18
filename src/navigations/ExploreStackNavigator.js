import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explore from 'screens/Explore';
import CourseDetail from 'screens/CourseDetail';
import Author from 'screens/Author';
import Basket from 'screens/Basket';
import VideoPlayer from 'screens/VideoPlayer';

const ExploreStack = createNativeStackNavigator();

function ExploreStackNavigator() {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen
        name="Explore"
        component={Explore}
        options={() => ({
          headerShown: false,
        })}
      />
      <ExploreStack.Screen
        name="CourseDetail"
        component={CourseDetail}
        options={() => ({
          headerShown: false,
        })}
      />
      <ExploreStack.Screen
        name="VideoPlayer"
        component={VideoPlayer}
        options={() => ({
          headerShown: false,
        })}
      />
      <ExploreStack.Screen
        name="Author"
        component={Author}
        options={() => ({
          headerShown: false,
        })}
      />
      <ExploreStack.Screen
        name="Basket"
        component={Basket}
        options={() => ({
          headerShown: false,
        })}
      />
    </ExploreStack.Navigator>
  );
}

export default ExploreStackNavigator;
