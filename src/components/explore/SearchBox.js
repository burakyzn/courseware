import React from 'react';
import { StyleSheet, View } from 'react-native';

import PropTypes from 'prop-types';

import { Ionicons } from '@expo/vector-icons';

import Colors from '~constants/Colors';

import InputBox from '../core/InputBox';

function SearchBox(props) {
  const { width, height, placeholder } = props;
  return (
    <View width={width} height={height}>
      <View style={styles.container}>
        <InputBox
          rightIcon={<Ionicons name="search-outline" size={32} color="black" />}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
}

SearchBox.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
};

SearchBox.defaultProps = {
  placeholder: '',
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: Colors.lightBaseOne,
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
    color: Colors.lightBaseThree,
    marginLeft: 15,
  },
});
