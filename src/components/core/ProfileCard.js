import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

import PropTypes from 'prop-types';

import { Ionicons } from '@expo/vector-icons';

import Colors from '~constants/Colors';
import responsiveFonts from '~utils/ResponsiveFonts';

const hp = Dimensions.get('window').height;

function ProfileCard(props) {
  const { fullName, summary, iconName, imageURL} = props;

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
    <View style={styles.container}>
      <Image style={handleImageStyle()} source={{
          uri: imageURL
        }} />
      <View style={styles.information}>
        <Text style={styles.fullName}>{fullName}</Text>
        <Text style={styles.summary}>{summary}</Text>
      </View>
      <Ionicons name={iconName} size={32} color={Colors.lightBaseOne} />
    </View>
  );
}

ProfileCard.propTypes = {
  fullName: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: '5%',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  information: {
    flex: 1,
  },
  fullName: {
    fontSize: responsiveFonts(14),
    fontFamily: 'DMSans_400Regular',
    color: Colors.lightBaseOne,
  },
  summary: {
    fontSize: responsiveFonts(12),
    fontFamily: 'DMSans_400Regular',
    color: Colors.lightBaseOne,
  },
});
