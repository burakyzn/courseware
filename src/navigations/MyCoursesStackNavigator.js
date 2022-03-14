import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import MyCourses from "../screens/MyCourses";
import CourseDetail from "../screens/CourseDetail";
import Basket from "../screens/Basket";
import Author from "../screens/Author";

const MyCourseStack = createNativeStackNavigator();

const MyCourseStackNavigator = () => {
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
};

export default MyCourseStackNavigator;
