import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './TabNavigator';

function RootNavigator() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default RootNavigator;
