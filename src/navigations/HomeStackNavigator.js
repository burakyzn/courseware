import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Home from "screens/Home";
import CourseDetail from "screens/CourseDetail";
import Basket from "screens/Basket";
import Author from "screens/Author";
import VideoPlayer from "screens/VideoPlayer";

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={() => ({
          headerShown: false,
        })}
      />
      <HomeStack.Screen
        name="CourseDetail"
        component={CourseDetail}
        options={() => ({
          headerShown: false,
        })}
      />
      <HomeStack.Screen
        name="VideoPlayer"
        component={VideoPlayer}
        options={() => ({
          headerShown: false,
        })}
      />
      <HomeStack.Screen
        name="Author"
        component={Author}
        options={() => ({
          headerShown: false,
        })}
      />
      <HomeStack.Screen
        name="Basket"
        component={Basket}
        options={() => ({
          headerShown: false,
        })}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
