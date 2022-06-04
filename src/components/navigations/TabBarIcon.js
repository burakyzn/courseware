import React from 'react';

import PropTypes from 'prop-types';

import { Ionicons } from '@expo/vector-icons';

import COLORS from '~constants/colors';

function TabBarIcon({ focused, name }) {
  return <Ionicons name={name} size={22} color={focused ? COLORS.secondary : COLORS.darkBaseOne} />;
}

TabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default TabBarIcon;
