import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import PropTypes from 'prop-types';

import { Ionicons } from '@expo/vector-icons';

import Colors from '~constants/Colors';
import responsiveFonts from '~utils/ResponsiveFonts';

function AuthorButton(props) {
  const { onPress } = props;

  return (
    <TouchableOpacity style={styles.authorWrapper} onPress={onPress}>
      <View style={styles.authorProfile}>
        <Ionicons name="person-circle" size={60} color="black" />
      </View>
      <View style={styles.authorInformation}>
        <Text style={styles.authorFullName}>Burak Yazan</Text>
        <Text style={styles.authorSummary}>14 Courses • 1400 Students</Text>
      </View>
    </TouchableOpacity>
  );
}

AuthorButton.propTypes = {
  onPress: PropTypes.func,
};

AuthorButton.defaultProps = {
  onPress: () => {},
};

export default AuthorButton;

const styles = StyleSheet.create({
  authorWrapper: {
    backgroundColor: Colors.lightBaseTwo,
    width: '100%',
    marginTop: '5%',
    borderRadius: 20,
    flex: 1,
    flexDirection: 'row',
  },
  authorProfile: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authorInformation: {
    flex: 3,
    justifyContent: 'center',
  },
  authorFullName: {
    fontSize: responsiveFonts(14),
    fontFamily: 'DMSans_400Regular',
    color: Colors.darkBaseOne,
  },
  authorSummary: {
    fontSize: responsiveFonts(10),
    fontFamily: 'DMSans_400Regular',
    color: Colors.lightBaseThree,
  },
});
