import React from 'react';

import { Ionicons } from '@expo/vector-icons';

import COLORS from '~constants/Colors';

function TabBarIcon({ focused, name }) {
  return <Ionicons name={name} size={22} color={focused ? COLORS.secondary : COLORS.darkBaseOne} />;
}

export default TabBarIcon;
