import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Account from '~screens/Account';
import Author from '~screens/Author';
import Basket from '~screens/Basket';
import CourseDetail from '~screens/CourseDetail';
import VideoPlayer from '~screens/VideoPlayer';
import PAGES from '~constants/pages'

const AccountStack = createNativeStackNavigator();

function AccountStackNavigator() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name={PAGES.account}
        component={Account}
        options={() => ({
          headerShown: false,
        })}
      />
      <AccountStack.Screen
        name={PAGES.courseDetail}
        component={CourseDetail}
        options={() => ({
          headerShown: false,
        })}
      />
      <AccountStack.Screen
        name={PAGES.videoPlayer}
        component={VideoPlayer}
        options={() => ({
          headerShown: false,
        })}
      />
      <AccountStack.Screen
        name={PAGES.author}
        component={Author}
        options={() => ({
          headerShown: false,
        })}
      />
      <AccountStack.Screen
        name={PAGES.basket}
        component={Basket}
        options={() => ({
          headerShown: false,
        })}
      />
    </AccountStack.Navigator>
  );
}

export default AccountStackNavigator;
