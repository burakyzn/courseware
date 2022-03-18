import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

import responsiveFonts from 'utils/ResponsiveFonts';
import COLORS from 'constants/Colors';

const hp = Dimensions.get('window').height;

function Message(props) {
  const { sender, message, photoUrl } = props;

  const handleImageStyle = () => {
    const ratio = hp * 0.05;

    return {
      width: ratio,
      height: ratio,
      borderRadius: ratio / 2,
      marginRight: 10,
    };
  };

  return (
    <View style={styles.messageContainer}>
      <Image style={handleImageStyle()} source={{ uri: photoUrl }} />
      <View style={styles.messageWrapper}>
        <Text style={styles.fullName}>{sender}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
}

export default Message;

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  messageWrapper: {
    flex: 1,
  },
  fullName: {
    fontSize: responsiveFonts(12),
    fontFamily: 'DMSans_700Bold',
    color: COLORS.primary,
  },
  message: {
    fontSize: responsiveFonts(12),
    fontFamily: 'DMSans_400Regular',
    textAlign: 'justify',
  },
});
