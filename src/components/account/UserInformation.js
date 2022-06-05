import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import COLORS from '~constants/colors';
import responsiveFonts from '~utils/responsiveFonts';
import {userSelector} from '~features/AuthSlice';

const hp = Dimensions.get('window').height;

function UserInformation() {
  const userData = useSelector(userSelector);

  const handleImageStyle = () => {
    const ratio = hp * 0.13;

    return {
      width: ratio,
      height: ratio,
      borderRadius: ratio / 2,
      marginBottom: 20,
    };
  };

  return (
    <View style={styles.container}>
      <Image style={handleImageStyle()} source={{uri: userData.imageURL}} />
      <Text style={styles.fullName}>{userData.name}</Text>
      <Text style={styles.email}>{userData.email}</Text>
    </View>
  );
}

export default UserInformation;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullName: {
    color: COLORS.lightBaseOne,
    fontSize: responsiveFonts(24),
    fontFamily: 'DMSans_700Bold',
  },
  email: {
    color: COLORS.lightBaseOne,
    fontSize: responsiveFonts(14),
    fontFamily: 'DMSans_400Regular',
  },
});
