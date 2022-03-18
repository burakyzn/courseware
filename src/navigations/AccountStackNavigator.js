import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from 'screens/Account';
import CourseDetail from 'screens/CourseDetail';
import Basket from 'screens/Basket';
import Author from 'screens/Author';
import VideoPlayer from 'screens/VideoPlayer';

const AccountStack = createNativeStackNavigator();

function AccountStackNavigator() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="Account"
        component={Account}
        options={() => ({
          headerShown: false,
        })}
      />
      <AccountStack.Screen
        name="CourseDetail"
        component={CourseDetail}
        options={() => ({
          headerShown: false,
        })}
      />
      <AccountStack.Screen
        name="VideoPlayer"
        component={VideoPlayer}
        options={() => ({
          headerShown: false,
        })}
      />
      <AccountStack.Screen
        name="Author"
        component={Author}
        options={() => ({
          headerShown: false,
        })}
      />
      <AccountStack.Screen
        name="Basket"
        component={Basket}
        options={() => ({
          headerShown: false,
        })}
      />
    </AccountStack.Navigator>
  );
}

export default AccountStackNavigator;
