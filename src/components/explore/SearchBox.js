import React from 'react';
import { StyleSheet, View } from 'react-native';

import PropTypes from 'prop-types';

import { Ionicons } from '@expo/vector-icons';

import COLORS from '~constants/colors';

import InputBox from '../core/InputBox';

function SearchBox(props) {
  const { width, height, placeholder, onSearchTextChange } = props;
  return (
    <View width={width} height={height}>
      <View style={styles.container}>
        <InputBox
          rightIcon={<Ionicons name="search-outline" size={32} color="black" />}
          placeholder={placeholder} onChangeText={onSearchTextChange}
        />
      </View>
    </View>
  );
}

SearchBox.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  onSearchTextChange: PropTypes.func
};

SearchBox.defaultProps = {
  placeholder: '',
  onSearchTextChange: () => {}
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: COLORS.lightBaseOne,
  },
  iconWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderWrapper: {
    flex: 5,
    justifyContent: 'center',
  },
  placeholder: {
    color: COLORS.lightBaseThree,
    marginLeft: 15,
  },
});
