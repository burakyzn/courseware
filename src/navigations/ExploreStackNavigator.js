import * as React from "react";
import Explore from "../screens/Explore";
import CourseDetail from "../screens/CourseDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ExploreStack = createNativeStackNavigator();

const ExploreStackNavigator = () => {
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
    </ExploreStack.Navigator>
  );
};

export default ExploreStackNavigator;
