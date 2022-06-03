import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions} from 'react-native';

import PropTypes from 'prop-types';

import { Ionicons } from '@expo/vector-icons';

import Colors from '~constants/Colors';
import responsiveFonts from '~utils/ResponsiveFonts';

const hp = Dimensions.get('window').height;

function AuthorButton(props) {
  const { name, imageURL, courseCount, studentCount, onPress } = props;

  const handleImageStyle = () => {
    const ratio = hp * 0.06;

    return {
      width: ratio,
      height: ratio,
      borderRadius: ratio / 2,
      marginRight: 20,
    };
  };

  return (
    <TouchableOpacity style={styles.authorWrapper} onPress={onPress}>
      <View style={styles.authorProfile}>
        <Image style={handleImageStyle()} source={{
          uri: imageURL
        }} />
      </View>
      <View style={styles.authorInformation}>
        <Text style={styles.authorFullName}>{name}</Text>
        <Text style={styles.authorSummary}>{courseCount} Courses • {studentCount} Students</Text>
      </View>
    </TouchableOpacity>
  );
}

AuthorButton.propTypes = {
  name: PropTypes.string.isRequired,
  courseCount: PropTypes.number.isRequired,
  studentCount: PropTypes.number.isRequired,
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
