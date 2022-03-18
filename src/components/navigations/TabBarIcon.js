import React from 'react';

import PropTypes from 'prop-types';

import { Ionicons } from '@expo/vector-icons';

import Colors from '~constants/Colors';

function TabBarIcon({ focused, name }) {
  return <Ionicons name={name} size={22} color={focused ? Colors.secondary : Colors.darkBaseOne} />;
}

TabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default TabBarIcon;
