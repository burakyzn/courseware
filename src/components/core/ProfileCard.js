import React from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import COLORS from 'constants/Colors';
import responsiveFonts from 'utils/ResponsiveFonts';

const hp = Dimensions.get('window').height;
const profilePhoto = require('assets/profile-photo.png');

function ProfileCard(props) {
  const { fullName, summary, iconName } = props;

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
      <Image style={handleImageStyle()} source={profilePhoto} />
      <View style={styles.information}>
        <Text style={styles.fullName}>{fullName}</Text>
        <Text style={styles.summary}>{summary}</Text>
      </View>
      <Ionicons name={iconName} size={32} color={COLORS.lightBaseOne} />
    </View>
  );
}

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
    color: COLORS.lightBaseOne,
  },
  summary: {
    fontSize: responsiveFonts(12),
    fontFamily: 'DMSans_400Regular',
    color: COLORS.lightBaseOne,
  },
});
