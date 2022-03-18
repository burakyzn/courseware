import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import Colors from '~constants/Colors';

function TabBarIcon({ focused, name }) {
  return <Ionicons name={name} size={22} color={focused ? Colors.secondary : Colors.darkBaseOne} />;
}

export default TabBarIcon;
